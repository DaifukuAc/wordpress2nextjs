'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from './常用组件/AritcleCard';
import { Article } from './api/后端常用函数/getAirtcle';
import  Header  from './常用组件/Header'
const Main = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]); // 使用 useState 来管理状态

  useEffect(() => {
    // 使用 useEffect 来处理异步数据获取
    fetch('/api/v2/posts')
      .then(res => res.json())
      .then(resJson => {
        setAllArticles(resJson); // 更新状态
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); // 空依赖数组表示只在组件挂载时执行一次

  return (
    <>
    
    <main>
      
      {allArticles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </main>
    </>
  );
};

export default Main;
