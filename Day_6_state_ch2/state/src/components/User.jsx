import React from 'react'

function User() {
    const Users = [
        {
            id:1,
            name:'Rohit',
            password:'123'
        },
        {
            id:2,
            name:'Kmlesh',
            password:'1234'
        },
        {
            id:3,
            name:'Rajesh',
            password:'12345'
        },
        {
            id:4,
            name:'Suresh',
            password:'123456'
        }
    ]
  return (
    <>
      <h2>User Data</h2>
      <ul>
        {
            Users.map((user,index)=>{
                return (
                    <>
                        <li key={index}>
                            {user.name} 
                            <ul>
                                {
                        Users.map((subUser,index)=>{
                            return (
                                <>
                                    {user.name == subUser.name ? <li key={index}>{user.password}</li> : ''}
                                    
                                </>
                            )
                        })
                                }
                            </ul>
                        </li>
                    </>
                )
            })
        }
      </ul>
    </>
  )
}

export default User
