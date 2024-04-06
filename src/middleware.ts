import { NextResponse, type NextRequest } from "next/server";
type valores = {
    pessoal: string,
    profissional: string
    contatos: string

}
export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const previousPage = request.headers.get('referer')
    if (token) {
        const signinURL = new URL('/', request.url)
        const signinURL2 = new URL('/twoPage', request.url)
        const todos = JSON.parse(token) as valores
        if(todos.pessoal === '' ){
            return NextResponse.redirect(signinURL)
        }
        else if(todos.profissional ===''){
            if(request.nextUrl.pathname ==='/twoPage'){
                return NextResponse.next()
            }
            return NextResponse.redirect(signinURL2)
        }
       
    }

}
export const config = {
    matcher: ['/twoPage/:path*','/treePage/:path*']
}