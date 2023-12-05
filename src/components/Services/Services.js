import './Services.css'
import sev1 from '../../imges/1.png'
import sev2 from '../../imges/ss.png'
import sev3 from '../../imges/ؤ-removebg-preview.png'
import sev4 from '../../imges/2.png'
import sev5 from '../../imges/3.png'
import sev6 from '../../imges/4.png'
import sev7 from '../../imges/5.png'
const Services = ()=>{

    return(
        <section id="Services" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
            <h1 class="title">خدماتنا</h1>
            <div className='ServicGroub' >
             <div className='servCard'  >
             <h2> تصميم مواقع الويب</h2>
             <img src={sev7}/>
            
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             <div className='servCard'>
             <h2> تصميم تطبيقات الموبايل </h2>
          
            <img src={sev2}/>
           
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             <div className='servCard'>
             <h2> تصميم الغرافيك</h2>
            
             <img src={sev3}/>
             
            
             <i class="fa-solid fa-arrow-right"></i>
             </div>
               
              <div className='servCard '>
             <h2> بناء الهوية البصرية</h2>
           
             <img src={sev4}/>
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             
             <div className='servCard '>
             <h2>  إدارة منصات التواصل الاجتماعي</h2>
             <img src={sev5}/>
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             <div className='servCard '>
             <h2>  إدارة الحملات الإعلانية المدفوعة</h2>
             <div className='otherWidth'>
             <img src={sev6}/>
             </div>
             <i class="fa-solid fa-arrow-right"></i>
             </div>
            </div> 
                 <div className='servCard alone'>
             <h2> إدارة استراتيجيات خطط المحتوى </h2>
             <img src={sev1}/>
             <i class="fa-solid fa-arrow-right"></i>
             </div> 
        </section>
    )

}
export default Services