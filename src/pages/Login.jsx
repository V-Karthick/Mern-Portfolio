import React from 'react'

const Login = () => {
    const [visible, setVisible] = useState(false)
  return (
    <>
        {
            visible && (
                <>
                    <div className='h-dcreen w-screen absolute top-0 left-0 bg-black/20 flex '>

                    </div>
                </>
            )
        }
    </>
  )
}

export default Login