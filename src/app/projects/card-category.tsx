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

  const thumbInfo = useMemo(() => {
    if (isDesign) return { width: 800, height: 514, ratio: "1x1" };
    if (isIllustration) return { width: 760, height: 514, ratio: "34x23" };
    if (isDevelopment) return { width: 454, height: 146, ratio: "28x9" };
  }, [isDesign, isDevelopment, isIllustration]);

  return (
    <Card
      className={classNames(
        "card-category",
        isDevelopment ? "card-category--vertical" : "",
        bgClassName,
        className
      )}
    >
      <CardBody className={isDevelopment ? "text-gray-800" : "text-gray-300"}>
        <Stack gap={5} className="h-100">
          {category.thumbSrc && isDevelopment ? (
            <Ratio aspectRatio={thumbInfo?.ratio} className="mw-530">
              <Image
                className="object-fit-cover"
                src={category.thumbSrc}
                alt={category.name}
                width={thumbInfo?.width}
                height={thumbInfo?.height}
              />
            </Ratio>
          ) : null}

          <h4
            className={classNames(
              "h3",
              isDevelopment ? "mt-auto text-black" : "text-white"
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
      </CardBody>
      {category.thumbSrc && (isDesign || isIllustration) ? (
        <Ratio aspectRatio={thumbInfo?.ratio}>
          <Image
            className="object-fit-cover"
            src={category.thumbSrc}
            alt={category.name}
            width={thumbInfo?.width}
            height={thumbInfo?.height}
          />
        </Ratio>
      ) : null}
    </Card>
  );
};

export default CardCategory;
