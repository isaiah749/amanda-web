import React from "react";
import logo from "../../styles/Website Images/MagnificentMindsTutoring[No Background].png";
import Image from "next/image";

const ProfessionalCard = () => {
  return (
    <div className="h-[max-content] w-[450px] lg:w-[500px] xl:w-[600px] flex items-center justify-center py-2 lg:ml-20 ">
      <div className="relative h-[100px] w-[100px] md:h-[150px] md:w-[150px] mt-2 mx-auto  ">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="flex-col items-center justify-center pt-10 text-center mr-5 ">
        <h2 className="font-bold text-lg lg:text-xl">Amanda Tucker</h2>
        <h3 className="font-semibold lg:text-lg">Dyslexia Tutor</h3>
        <h2 className="font-bold lg:text-xl">Magnificent Minds Tutoring, LLC</h2>
        <div className="h-[1px] w-[200px] border-2 lg:w-[400px] border-black mx-auto border-dotted my-2 "></div>
        <h2 className="text-sm lg:text-lg">3313 W County Road 500 N Richland, IN 47634</h2>
        <h3 className="lg:text-lg">magnificentmindstutoring.com</h3>
        <h2 className="lg:text-lg">magmindstutor@gmail.com</h2>
        <div className="h-[1px] w-[200px] border-2 lg:w-[400px] border-black mx-auto border-dotted my-2 "></div>
        <h2 className="font-bold text-lg">Phone/Text: 812-449-6934</h2>
      </div>
    </div>
  );
};

export default ProfessionalCard;
