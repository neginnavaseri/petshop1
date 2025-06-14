import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div className="container my-5">
      <h2 className="text-center">صفحه جزئیات مطلب {id}</h2>
      <p>در اینجا محتوای کامل مقاله شماره {id} نمایش داده خواهد شد.</p>
    </div>
  );
};

export default BlogDetail;
