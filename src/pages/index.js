// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
//import List from './qcomps/recipes'
import RecipeList from './qcomps/recipes'
import Gallery from './qcomps/state'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/snapshot2'

export default function Home() {
  return (
    <div className={styles.main}>
        <Counter />
    </div>
  )
}
