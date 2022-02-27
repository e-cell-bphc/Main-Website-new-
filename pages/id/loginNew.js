import React from 'react'
import { providers, signIn, getsession, csrfToken } from 'next-auth/react'


function LoginNew() {
  return (
        <div>  
          {Object.values(providers).map((provider) => {
              return (
                  <div key={provider.name}>
                      <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}  
                      </button>
                    </div>
            )
        })}
        </div>
    
  )
}

export default LoginNew

export async function getServerSideProps(context) {
    return {
        props: {
           providers: await providers(context), 
        }
    };
}