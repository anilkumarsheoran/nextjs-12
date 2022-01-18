import styles from './layout.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }){
    return <div className= "md:container md:mx-auto">
        <Header />
        {children}
        <Footer />
        </div>
}