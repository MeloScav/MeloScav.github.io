import { CategoryType, ICategory } from "@/types";
import classNames from "@/utils/classNames";
import Image from "next/image";

import React, { useMemo } from "react";
import { Card, CardBody, Ratio, Stack } from "react-bootstrap";

interface ICardCategoryProps {
  category: ICategory;
  className?: string;
}

const CardCategory: React.FC<ICardCategoryProps> = (props) => {
  const { category, className } = props;

  const isDesign = useMemo(
    () => category.id === CategoryType.DESIGN,
    [category.id]
  );
  const isIllustration = useMemo(
    () => category.id === CategoryType.ILLUSTRATION,
    [category.id]
  );
  const isDevelopment = useMemo(
    () => category.id === CategoryType.DEVELOPMENT,
    [category.id]
  );

  const bgClassName = useMemo(() => {
    if (isDesign) return "bg-primary";
    if (isDevelopment) return "bg-secondary";
    return "bg-black";
  }, [isDesign, isDevelopment]);

  return (
    <Card
      className={classNames(
        "card-category",
        category.thumbSrc ? "card-category--thumb" : "",
        bgClassName,
        className
      )}
    >
      <CardBody className={isDevelopment ? "text-gray-800" : "text-gray-300"}>
        <Stack gap={5} className="h-100">
          {isDevelopment ? (
            <p
              className={classNames(
                "fs-5 pre-line-format pe-none user-select-none"
              )}
              dangerouslySetInnerHTML={{
                __html: `const sayHello = () => {
                        &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello world");
                    };`,
              }}
            ></p>
          ) : null}
          <Stack gap={5} className={isDevelopment ? "justify-content-end" : ""}>
            <h4
              className={classNames(
                "h3",
                isDevelopment ? "text-black" : "text-white"
              )}
            >
              {category.name}
            </h4>
            <div className="fs-7">{category.description}</div>

            {category.tags?.length ? (
              <Stack direction="horizontal" gap={5} className="fs-7 flex-wrap">
                {category.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </Stack>
            ) : null}
          </Stack>
        </Stack>
      </CardBody>
      {category.thumbSrc ? (
        <Ratio aspectRatio={isIllustration ? "34:23" : "1x1"}>
          <Image
            className="object-fit-cover"
            src={category.thumbSrc}
            alt={category.name}
            width={isIllustration ? 760 : 800}
            height={isIllustration ? 811 : 514}
          />
        </Ratio>
      ) : null}
    </Card>
  );
};

export default CardCategory;
