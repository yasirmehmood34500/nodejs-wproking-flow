import { apiUrl, requestHeader } from '@/base-url';
import { navbar_fetch } from '@/component-functions';
import Navbar from '@/components/navbar';
import Head from 'next/head'
import Link from 'next/link';

export async function getServerSideProps(context) {
    const data = await fetch(apiUrl() + "single/department/id/" + context.query['id'], requestHeader())
    const department = await data.json();
    const course = await navbar_fetch();
    return {
        props: {
            department: department.result,
            course
        }
    }
}

export default function Home({ department, course }) {
    return (
        <>
            <Head>
                <title>GetStaticProps & GetStaticPath & GetServerSideProps</title>
                <meta name="description" content="Generated by GetStaticProps & GetStaticPath & GetServerSideProps" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Link href="/">Home</Link>
                <h1>Detail Department</h1>
                <div>

                    <div>
                        <h2>{department.d_name}</h2>
                        <p>{department.mobile}</p>
                    </div>
                </div>
                <Navbar course={course} />
            </main>
        </>
    )
}





