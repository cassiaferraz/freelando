import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco:'',
        atencao:'',
        focus:'',

        primarias:{
            a:'',
            b:'',
            c:''
        },

        secundarias:{
            a:'',
            b:'',
            c:''
        },

        neutras:{
            a:'',
            b:'',
            c:''
        },

        dark:{
            a:'',
            b:'',
            c:''
        }
    }
}
export default function ProvedorTema({ children }){
    return <ThemeProvider theme={tema}>
        {children}
        </ThemeProvider>
}