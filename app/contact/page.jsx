"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectLabel, SelectTrigger, SelectValue ,SelectContent, SelectGroup, SelectItem} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'


const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+212) 631 192 323"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"ismailbouaichi10@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    description:"‏78 Avenue Ibn Sina شارع‏ ابن‏ سينا‏, Belbekkar, 40000 Marrakesh, Morocco"
  },
]
const Contact = () => {
  return (
    <motion.section   
    initial={{opacity:0}}
    animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} 
    className="py-6"
    >

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 bg-transparent rounded-xl p-10 border border-accent">
              <h3 className="text-4xl text-accent">
                Let's Work Together
              </h3>
              <p className="text-accent">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
              <div className="grid grid-cols 1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"  />
                <Input type="lastname" placeholder="lastname"/>
                <Input type="email" placeholder="email"/>
                <Input type="phone" placeholder="phone"/>


              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectGroup>
                      <SelectLabel>
                        Select a Service
                      </SelectLabel>
                      <SelectItem value="est">
                        Web Developemnt
                      </SelectItem>
                      <SelectItem value="cst">
                      Frontend Development
                      </SelectItem>
                      <SelectItem value="mst">
                      Backend Development
                      </SelectItem>
                      <SelectItem value="bst">
                      Full Stack Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here"/>

              <Button size="md" className="max-w-40 bg-transparent text-accent border border-accent hover:bg-[#E6D2C0] hover:text-accent hover:border-[#E6D2C0]">

                Send message
              </Button>

            </form>
           
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
             <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return<li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent rounded-md flex items-center justify-center ">
                    <div className="text-[28px] text-white">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p >{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              })}
             </ul>
            </div>
        </div>
      </div>
      </motion.section>
  )
}

export default Contact