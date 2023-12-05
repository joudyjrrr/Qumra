import './WhoQumra.css'
import img from '../../imges/q.png'

const WhoQumra = ()=>{
    return(
    <div id="WhoQumra" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
       <div className='Who-head'>
          <div>
            <img src={img}  />
          </div>
       </div>
       <div className='text-content'>
           <div className='content'>
            <p>
            تلبية للطلب المنتامي في مجال التسويق الرقمي تأسست شركة قُمرة الإمارة التسوقية والتي تتضمت إدارة منصات التواصل الإحتماعي والحملات المدفوعة وجميع أنواع التصاميم والمحتوى وتصاميم الفيديو وبالإضافة إلى العديد من الخدمات التسويقية الأخرى لمختلف القطاعات والشركات بمختلف أحجامها وأنواعها..
            </p>
           </div>
       </div>
    </div>
    )

}
export default WhoQumra