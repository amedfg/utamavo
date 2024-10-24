import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselCard() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem className="basis-1/4">
            <div className="p-1">
              <Card>
                <CardHeader>
                    <img src="../img/virtual-office-1.png" alt="virtual-office" className="w-[279px] h-[223px] rounded-sm" />
                </CardHeader>
                <CardContent>
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">2</span>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">3</span>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">4</span>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">5</span>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="text-primary"/>
      <CarouselNext className="text-primary"/>
    </Carousel>
  )
}
