import './style.css'
import Quickeasy from './quickeasy'
import Banner from './banner'
import Whyus from './whyus'
import Review from './review'
import Faq from './faq'
import Store from './store'
import Footer from './footer'
import Companyslider from './components/companyslider'
const Body = () => {
    return (
        <div>
            <Companyslider/>
            <Quickeasy />
            <Banner />
            <Whyus />
            <Review />
            <Faq />
            <Store />
            <Footer />
        </div>
    )
}
export default Body