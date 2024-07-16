import express, { Request, Response } from 'express';
import { client } from '../data/DB';
import bcrypt from 'bcrypt';
import { matchedData, validationResult } from 'express-validator';
import { AddressUpdateSchema, cartQtyUpdate, defaultUpdateSchema, insertAddressSchema, userUpdateSchema } from '../validators/userUpdateValidation';

const saltRounds = 10;
const router = express.Router();
const userTable = 'users';


// Update user route
router.put('/user',userUpdateSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userName, email, password, mobile_number, dob, userID } = matchedData(req);
        const updatedIP = req.ip; // Capture the IP address from the request

        try {
            // Validate input (optional)
            const updates = [];
            const values = [];
            let valueIndex = 1;

            if (userName) {
                updates.push(`userName = $${valueIndex++}`);
                values.push(userName);
            }
            if (email) {
                updates.push(`email = $${valueIndex++}`);
                values.push(email);
            }
            if (password) {
                const hash = await bcrypt.hash(password, saltRounds);
                updates.push(`password = $${valueIndex++}`);
                values.push(hash);
            }
            if (mobile_number) {
                updates.push(`mobile_number = $${valueIndex++}`);
                values.push(mobile_number);
            }
            if (dob) {
                updates.push(`dob = $${valueIndex++}`);
                values.push(dob);
            }

            // Always update the updated_ip field
            updates.push(`update_ip = $${valueIndex++}`);
            values.push(updatedIP);

            if (updates.length === 0) {
                return res.status(400).json({ error: 'No fields provided for update' });
            }

            values.push(userID);
            const updateQuery = `UPDATE "${userTable}" SET ${updates.join(', ')} WHERE userID = $${valueIndex}`;

            await client.query(updateQuery, values);

            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
    else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.put('/user/update/address',AddressUpdateSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID, addressID, addressType, contactNumber, addressLine1, addressLine2, city, state, country, postalCode, userName } = matchedData(req);
        const updateQuery = `
            UPDATE addresses 
            SET addresstype = $1, contactnumber = $2, addressline1 = $3, addressline2 = $4, city = $5, state = $6, country = $7, postalcode = $8, username = $9 
            WHERE addressid = $10 AND userid = $11
        `;
        const values = [addressType, contactNumber, addressLine1, addressLine2, city, state, country, postalCode, userName, addressID, userID];
    
        try {
            await client.query(updateQuery, values);
            res.status(200).json({ message: 'Address updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
const IDGenerator = ()=>{
    const ID = Math.round(Math.random() * 1000 * 1000 * 100);
    return ID;
}
// Add User Address
router.post('/user/insert/address',insertAddressSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { addressType, contactNumber, addressLine1, addressLine2, city, state, country, postalCode, userName, userID } = matchedData(req);
        const addressID = IDGenerator();
        let is_default = false;
        const insertQuery = `
            INSERT INTO addresses (addresstype, userid, contactnumber, addressline1, addressline2, city, state, country, postalcode, username, addressid,is_default) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11,$12)
        `;
        const checkQuery = `SELECT addressid FROM addresses WHERE userid = $1`;
    
        try {
            const response = await client.query(checkQuery,[userID]);
            if(response.rows.length===0) is_default=true;
            const values = [addressType, userID, contactNumber, addressLine1, addressLine2, city, state, country, postalCode, userName,addressID,is_default];
            await client.query(insertQuery, values);
            res.status(200).json({ message: 'Address added successfully',addressid:addressID });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});

// Delete User Address
router.delete('/user/delete/address',defaultUpdateSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { addressID, userID } = matchedData(req);

        const deleteQuery = `
            DELETE FROM addresses 
            WHERE addressid = $1 AND userid = $2
        `;
        const values = [addressID, userID];
    
        try {
            await client.query(deleteQuery, values);
            res.status(200).json({ message: 'Address deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/user/set-default-address',defaultUpdateSchema, async (req:Request, res:Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { addressID, userID } = matchedData(req);
        try {
          // Begin transaction
          await client.query('BEGIN');
      
          // Set all is_default to false for the given userid
          const resetDefaultQuery = `
            UPDATE addresses
            SET is_default = false
            WHERE userid = $1 AND is_default = true
          `;
          await client.query(resetDefaultQuery, [userID]);
      
          // Set is_default to true for the given addressid and userid
          const setDefaultQuery = `
            UPDATE addresses
            SET is_default = true
            WHERE addressid = $1 AND userid = $2
          `;
          await client.query(setDefaultQuery, [addressID, userID]);
      
          // Commit transaction
          await client.query('COMMIT');
      
          res.sendStatus(200);
        } catch (error) {
          // Rollback transaction in case of error
          await client.query('ROLLBACK');
          console.error('Error setting default address:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }else{
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/user/cart-quantity',cartQtyUpdate,async (req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const {cartItemID,productID,userID,action} = matchedData(req);
        try {
            const incrementQuery = `UPDATE cartitems SET quantity = quantity + 1 WHERE userid = $1 AND cartitemid = $2 AND productid = $3`
            const decrementQuery = `UPDATE cartitems SET quantity = quantity - 1 WHERE userid = $1 AND cartitemid = $2 AND productid = $3`
            if(action==='increment'){
                await client.query(incrementQuery,[userID,cartItemID,productID]);
                return res.status(200).json({message:'Successfully incremented'});
            }else{
                await client.query(decrementQuery,[userID,cartItemID,productID]);
                return res.status(200).json({message:'Successfully decremented'});
            }
        } catch (error) {
            res.status(500).json({error:'Faced an error while updating'});
        }
    }else{
        console.log(result);
        res.status(500).json({error:'Validation Error'})
    }
})
export default router;
