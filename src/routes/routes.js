import {Invoice,Expenses,Home,Login,RequireAuth} from "../components/global"


export default [
    {
        path:"/",
        element:<Home></Home>,
        children:[

          {
            path:"/invoice",
            element:<RequireAuth><Invoice/></RequireAuth>,
            RouteName:"Invoice",
            protected:true

          },
          {
            path:"/expenses",
            element:<RequireAuth><Expenses/></RequireAuth>,
            RouteName:"Expenses",
            protected:true

          },
          {
            path:"/login",
            element:<Login></Login>,
            RouteName:"Login",
            protected:false,
          },
          {
            path:"settings",
            element:<div><p>settings</p></div>,
            RouteName:"Settings",
            protected:true,
          }
        ]
      }
     
]