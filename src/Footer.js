import React,{useState,useRef} from 'react'
import { FaFacebookF,FaPhoneAlt,FaMapMarkerAlt,FaAngleDown } from 'react-icons/fa';
import { useForm, reset } from "react-hook-form";
import Modal from './Components/Modal';
function Footer() {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors } } = useForm({
    defaultValues:{
      name:"",
      tel: "",
      mail: "",
      house_types:"",
      area:""
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    let url2 = process.env.PUBLIC_URL+'/api/contact/index.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
      }
    }).catch(error => console.log('error'));


  };
  return (
    <div className='w-full py-10 bg-[#C7B299]'>
      <div className='w-11/12 mx-auto flex gap-10 flex-col  lg:flex-row justify-start' >
        <div className='w-full  lg:w-1/2' data-aos="fade-up" data-aos-duration="1500">
            <div className='text-[#4E1951] text-xl lg:text-3xl font-bold  mb-5 tracking-[1px]  lg:tracking-[1px] leading-10 text-center lg:text-left '>
              <div className=''><span className=' border-b border-[#4E1951] pb-2 lg:border-none'>昌鴻建設X金日升建設</span>  </div>  
              
              <div className='tracking-[4.3px] lg:tracking-[6.5px]'>府城之心 幸福歌頌</div> 
            </div>
            <div className='w-4/5 mx-auto lg:w-full'>
              <div className='flex items-center gap-5 mb-5 lg:mt-20'>
                <div className='bg-[#4E1951] rounded-full p-2 mr-1'><FaPhoneAlt color='white' size='10' /></div>
                <a href="tel:062958892" target="_blank"><b className='text-[#4E1951] lg:text-xl  font-bold'>預約專線｜06-2958892</b></a>
              </div>
              <div className='flex items-center gap-5 mb-5 '>
                <div className='bg-[#4E1951] rounded-full p-2 mr-1'><FaMapMarkerAlt  color='white' size='10' /></div>
                <b className='text-[#4E1951] lg:text-xl font-bold'>接待中心｜安平區怡平路140巷</b>
              </div>
            </div>

            <div className="mt-10 lg:mt-20">
              <iframe width="100%" height="300" className="mb-10" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.564674461039!2d121.4714928!3d25.0462488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e628bbffe7dfd71!2z5YWI5ZeH5a6u!5e0!3m2!1szh-TW!2stw!4v1659426132137!5m2!1szh-TW!2stw" frameBorder="0" allowFullScreen=""/>
            </div>
          </div>
          {/* 表單 */}
          <div className='w-full  lg:w-1/2'>
            <div className='text-[#4E1951] text-2xl font-bold  text-center mb-5  lg:text-left-left'>線上預約</div>
            <div className='h-[2px] bg-[#4E1951] w-full my-3'></div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto my-14  rel" data-aos="fade-up" data-aos-duration="1500" >
                <div className='w-full  my-5 '>
                  <input type="text" className="block  bg-white  w-full
                      px-5 py-5 " placeholder="姓名"   {...register("name", { required: true})}/>
                </div>
                <div className='w-full  my-5 '>
                  <input type="text" className="block  bg-white  w-full 
                      px-5 py-5 " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
                </div>
                <div className='w-full my-5  '>
                  <input type="mail" className="block  bg-white   w-full
                      px-5 py-5 " placeholder="電子信箱"   {...register("mail", { required: true})}/>
                </div>

                <div className='text-[#4E1951] leading-9 font-bold text-base w-[90%] mx-auto'>
                  本人已知悉以下個人資料蒐集聲明事項您所登錄的個人資料將作為以下用途：一、本網站所載之相關事項通知 二、客戶管理與服務 三、本公司行銷業務之推廣
                  <div className='flex ai-center jc-center  '>

                    <input type="checkbox"  className='px-5 mr-5' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                    <label htmlFor="checkit" className='f-white'>我同意通過電話或郵件方式與我聯絡</label>
                    <div className='text-[#ca0916] ml-2 underline  underline-offset-2 cursor-pointer' onClick={()=>setIsOpen(true)}> 個人資料聲明事項 </div>
                  </div>
                </div>
                <div className='flex w-3/4 mx-auto gap-10 my-16'>
                  <button className='bg-[#4E1951] px-4 py-4  font-bold w-full t-14 text-xl tracking-wide text-white' type='submit'>送出</button>
                  <button className='bg-[#4E1951] px-4 py-4  font-bold w-full t-14 text-xl tracking-wide text-white' type='reset'>清除</button>
                </div>
                <div>{error}  {mailSent}</div>            
              </form>
            </div>
          </div>

    </div>
  )
}

export default Footer