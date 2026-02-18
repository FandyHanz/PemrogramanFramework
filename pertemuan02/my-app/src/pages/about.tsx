import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <p>Nama: Fandy Wahyu Hanzura</p> <br />
      <p>NIM: 2341720165</p> <br />
      <p>Program Studi: D4 Teknik Informatika</p> 
    </div>
  )
}
