"use client"
import { Card } from "../components/commons/Card";
import { LoginForm } from "../components/Forms/LoginForm";

export const metadata = {
  title: 'Login',
};

const page = () => {
  return (
    <main className='h-screen'>
      <section className="h-full bg-gray-50 dark:bg-gray-900">
        <div className=" pt-24 mx-auto w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/4">
          <Card>
            <LoginForm />
          </Card>
        </div>
      </section>
    </main>
  );
};


export default page;
