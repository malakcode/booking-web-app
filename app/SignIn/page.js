import { Button } from '@/components/ui/button'
import React from 'react'

function SignIn() {
  return (
    <div>
<section className="bg-white">


<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label htmlFor="Username" className="block text-sm font-medium text-gray-700"> Username </label>

            <input
              type="text"
              id="Username"
              name="username"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

        

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          
                <Button>Sign in</Button>
              
        

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Don't have an account?
              <a href="/SignUp" className="text-gray-700 underline"> Register</a>.
            </p>
          </div>
        </form>
      </div>
    </main>


    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="/signin.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      

      <div className="hidden lg:relative lg:block lg:p-12">


        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
         Sign in
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          get in here and experience better healthcare services with us
        </p>
      </div>
    </section>
  </div>






</section>
    </div>
  )
}

export default SignIn