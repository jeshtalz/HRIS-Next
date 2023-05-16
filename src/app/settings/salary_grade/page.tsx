"use client";
import HttpService from "../../../../lib/http.services";
import axios from "axios";
import Cookies from "js-cookie";
import { RootState } from '@/app/redux/store';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { useEffect } from "react";



export const metadata = {
  title: 'HRIS - Salary Grades',
};

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/",
//   headers: {
//     'X-Requested-With': 'XMLHttpRequest',
//   },
//   withCredentials: true,
// });

// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

export default function Home({ }) {
  const name = useSelector((state: RootState) => state.user.name);
  // console.log(name);
  // const todos = fetchTodos();
  // console.log(Cookies.get("token"));
  // console.log(todos);
  return <>
  </>
}
