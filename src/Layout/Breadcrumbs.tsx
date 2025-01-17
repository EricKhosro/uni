import { IBreadcrumb } from "Interfaces/Components-Interfaces/breadcrumbs";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  url: string;
}

const Breadcrumbs = ({ url }: IProps) => {
  const dictonary: IBreadcrumb[] = [
    // {
    //   url: "/Seller",
    //   faName: "لیست فروشندگان",
    //   children: [],
    // },
    {
      url: "/Seller/Add",
      faName: "ثبت فروشنده جدید",
      children: [
        {
          faName: "لیست فروشندگان",
          url: "/Seller",
          children: [],
        },
      ],
    },
    // {
    //   url: "/Customer",
    //   faName: "لیست مشتری ها",
    //   children: [],
    // },
    {
      url: "/Customer/Add",
      faName: "ثبت مشتری جدید",
      children: [
        {
          faName: "لیست مشتری ها",
          url: "/Customer",
          children: [],
        },
      ],
    },
    // {
    //   url: "/Factor",
    //   faName: "لیست صورت حساب ها",
    //   children: [],
    // },
    {
      url: "/Factor/Add",
      faName: "ثبت صورت حساب جدید",
      children: [
        {
          faName: "لیست صورت حساب ها",
          url: "/Factor",
          children: [],
        },
      ],
    },
    // {
    //   url: "/Product",
    //   faName: "لیست کالا ها",
    //   children: [],
    // },
    {
      url: "/Product/Add",
      faName: "ثبت کالا جدید",
      children: [
        {
          faName: "لیست کالا ها",
          url: "/Product",
          children: [],
        },
      ],
    },
  ];

  const getBreadcrumb = () => dictonary.find((d) => d.url === url);

  const pageBreadcrumb = getBreadcrumb();

  const getBreadcrumbJSX = (breadcrumb: IBreadcrumb) => {
    if (breadcrumb.url)
      return <Link to={breadcrumb.url}>{breadcrumb.faName}</Link>;
    return <div>{breadcrumb.faName}</div>;
  };

  if (!pageBreadcrumb) return <></>;

  return (
    <div className="flex flex-row justify-start items-center gap-1 title-small text-gray2">
      {pageBreadcrumb?.children.map((c) => (
        <>
          {getBreadcrumbJSX(c)}
          <div>/</div>
        </>
      ))}
      <div className="text-on-surface">{getBreadcrumbJSX(pageBreadcrumb)}</div>
    </div>
  );
};

export default Breadcrumbs;
