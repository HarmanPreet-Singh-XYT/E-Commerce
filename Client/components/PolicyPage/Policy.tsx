import React,{useState} from 'react'
import PrivacyPolicy from './PrivacyPolicy';
import RefundCancellation from './RefundCancellation';
import TermsConditions from './TermsConditions';

const Policy = () => {
  const policyTypes = [
    "Privacy Policy","Terms & Conditions","Refund & Concellation"
  ]
  const [policyType, setPolicyType] = useState(policyTypes[1]);
  return (
    <div className='flex flex-col justify-center border-t-[1px] py-5'>
      <div className='flex gap-10 justify-center pb-5'>
      {policyTypes.map((each,index)=>
        <button className={`py-3 px-4 text-white rounded-xl ${policyType === each ? 'bg-blueAc' : 'bg-blueIn'}`} onClick={()=>setPolicyType(each)} key={index}>{each}</button>
      )}
      </div>
      <div>
        {policyType===policyTypes[0] && <PrivacyPolicy/>}
        {policyType===policyTypes[1] && <TermsConditions/>}
        {policyType===policyTypes[2] && <RefundCancellation/>}
      </div>
    </div>
  )
}

export default Policy;