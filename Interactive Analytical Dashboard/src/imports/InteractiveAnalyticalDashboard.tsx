import svgPaths from "./svg-9yveylx2fs";

function Heading1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[54px] left-0 not-italic text-[36px] text-gray-800 text-nowrap top-0 whitespace-pre">Dashboard de Evaluación de Encontrabilidad</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Análisis interactivo de correlaciones entre las variables de comportamiento de búsqueda y estructuración semántica en la encontrabilidad de la información.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[150px] items-start pb-0 pt-[32px] px-[24px] relative w-full">
          <Heading1 />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[151px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">Indicadores Generales</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
            <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
            <path d={svgPaths.p21ee7180} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p2f00bb00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Cantidad de sesiones</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">10</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start relative w-full">
        <Paragraph1 />
        <Heading5 />
      </div>
    </div>
  );
}

function IndicatorCard() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[429.328px]" data-name="IndicatorCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[429.328px]">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[105px] items-start left-0 pl-[25px] pr-px py-[25px] rounded-[12px] top-0 w-[479.328px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IndicatorCard />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8">
            <path d={svgPaths.p3dbdf300} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
            <path d={svgPaths.p33169800} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-33.33%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
            <path d={svgPaths.p3ac3f240} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Total de recursos evaluados</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">142</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start relative w-full">
        <Paragraph2 />
        <Heading6 />
      </div>
    </div>
  );
}

function IndicatorCard1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[429.328px]" data-name="IndicatorCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[429.328px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[105px] items-start left-[503.33px] pl-[25px] pr-px py-[25px] rounded-[12px] top-0 w-[479.328px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IndicatorCard1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d="M1 1V7L5 9" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Tiempo promedio de sesión</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">12.4 min</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start relative w-full">
        <Paragraph3 />
        <Heading7 />
      </div>
    </div>
  );
}

function IndicatorCard2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[429.344px]" data-name="IndicatorCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[429.344px]">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[105px] items-start left-[1006.66px] pl-[25px] pr-px py-[25px] rounded-[12px] top-0 w-[479.344px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IndicatorCard2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[105px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[148px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">Correlaciones de Pearson</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[545.578px]" data-name="Container">
      <Heading8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-0 whitespace-pre">Leyenda de correlaciones</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-green-700 relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[159.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[159.031px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Positiva fuerte (≥0.7)</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container10 />
      <Text />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-green-400 relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[210.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[210.828px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Positiva moderada (0.4-0.7)</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container12 />
      <Text1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gray-100 relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[139.281px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">{`Débil o nula (<0.4)`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <Text2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-red-400 relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[244.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[244.578px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Negativa moderada (-0.4 a -0.7)</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container16 />
      <Text3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-red-700 relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[174.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[174.75px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Negativa fuerte (≤-0.7)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container18 />
      <Text4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(243,244,246,0.5)] h-[91px] relative rounded-[8px] shrink-0 w-[1486px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[91px] items-start p-[17px] relative w-[1486px]">
        <Heading4 />
        <Container20 />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="h-[29px] relative rounded-[12px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Promedio sesiones</p>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[29px] relative rounded-[12px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-blue-700 text-nowrap tracking-[0.08px] whitespace-pre">Sesión individual</p>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="bg-gray-100 h-[36px] relative rounded-[12px] shrink-0" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[4px] py-0 relative">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative shrink-0 w-[1486px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center pb-0 pt-[12px] px-0 relative w-[1486px]">
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[309.578px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[309.578px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ Estructuración semántica</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Text5() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[261.594px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[84.781px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Microdatos</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[261.59px] top-0 w-[159.547px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Microformatos</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[421.14px] top-0 w-[195.719px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[40.141px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">RDFa</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[616.86px] top-0 w-[145.328px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[70.984px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">JSON-LD</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[762.19px] top-0 w-[145.328px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[97.219px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Vocabularios</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[907.52px] top-0 w-[177.625px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.594px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Conj. de datos</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1085.14px] top-0 w-[195.609px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[81.094px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Ontologías</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1280.75px] top-0 w-[154.25px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text12 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[261.594px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text13 />
    </div>
  );
}

function CorrelationMatrix() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[62.53px] top-[14.5px] w-[34.469px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.43</p>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[261.59px] top-0 w-[159.547px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix />
    </div>
  );
}

function CorrelationMatrix1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[81.05px] top-[14.5px] w-[33.625px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.38</p>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[421.14px] top-0 w-[195.719px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix1 />
    </div>
  );
}

function CorrelationMatrix2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[56.89px] top-[14.5px] w-[31.547px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.41</p>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[616.86px] top-0 w-[145.328px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix2 />
    </div>
  );
}

function CorrelationMatrix3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[55.92px] top-[14.5px] w-[33.484px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.56</p>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[762.19px] top-0 w-[145.328px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix3 />
    </div>
  );
}

function CorrelationMatrix4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[72.19px] top-[14.5px] w-[33.25px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.62</p>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[907.52px] top-0 w-[177.625px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix4 />
    </div>
  );
}

function CorrelationMatrix5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[81.06px] top-[14.5px] w-[33.484px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.59</p>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1085.14px] top-0 w-[195.609px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix5 />
    </div>
  );
}

function CorrelationMatrix6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[61.66px] top-[14.5px] w-[30.938px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.51</p>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1280.75px] top-0 w-[154.25px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix6 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell />
      <SlotClone />
      <SlotClone1 />
      <SlotClone2 />
      <SlotClone3 />
      <SlotClone4 />
      <SlotClone5 />
      <SlotClone6 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function CorrelationMatrix7() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146.406px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[146.406px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ FAIR</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading9 />
    </div>
  );
}

function Text14() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell8() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[254.625px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.391px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Adopción FAIR</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[254.63px] top-0 w-[190.109px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[16.828px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F1</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[444.73px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.078px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F2</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[586.19px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.578px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F3</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[727.64px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F4</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[869.09px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[11.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I1</p>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1010.55px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[13.922px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I2</p>
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1152px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[14.422px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I3</p>
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1293.45px] top-0 w-[141.547px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text22 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
      <HeaderCell16 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow2 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[254.625px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text23 />
    </div>
  );
}

function CorrelationMatrix8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[78.75px] top-[14.5px] w-[32.594px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">0.72</p>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="absolute bg-green-700 h-[49px] left-[254.63px] top-0 w-[190.109px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix8 />
    </div>
  );
}

function CorrelationMatrix9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54px] top-[14.5px] w-[33.438px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.68</p>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[444.73px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix9 />
    </div>
  );
}

function CorrelationMatrix10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[53.83px] top-[14.5px] w-[33.781px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.54</p>
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[586.19px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix10 />
    </div>
  );
}

function CorrelationMatrix11() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[55.22px] top-[14.5px] w-[31px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.61</p>
    </div>
  );
}

function SlotClone10() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[727.64px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix11 />
    </div>
  );
}

function CorrelationMatrix12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.03px] top-[14.5px] w-[33.375px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.58</p>
    </div>
  );
}

function SlotClone11() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[869.09px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix12 />
    </div>
  );
}

function CorrelationMatrix13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[53.59px] top-[14.5px] w-[34.25px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.49</p>
    </div>
  );
}

function SlotClone12() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1010.55px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix13 />
    </div>
  );
}

function CorrelationMatrix14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.13px] top-[14.5px] w-[33.188px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.52</p>
    </div>
  );
}

function SlotClone13() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1152px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix14 />
    </div>
  );
}

function CorrelationMatrix15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.06px] top-[14.5px] w-[33.422px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.47</p>
    </div>
  );
}

function SlotClone14() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1293.45px] top-0 w-[141.547px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix15 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell1 />
      <SlotClone7 />
      <SlotClone8 />
      <SlotClone9 />
      <SlotClone10 />
      <SlotClone11 />
      <SlotClone12 />
      <SlotClone13 />
      <SlotClone14 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow3 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table1 />
    </div>
  );
}

function CorrelationMatrix16() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[207.109px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[207.109px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ Calidad web</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading10 />
    </div>
  );
}

function Text24() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell17() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[492.375px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[31.969px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">SEO</p>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[492.38px] top-0 w-[273.531px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[100.375px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Accesibilidad</p>
    </div>
  );
}

function HeaderCell19() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[765.91px] top-0 w-[342.953px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[94.219px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Rendimiento</p>
    </div>
  );
}

function HeaderCell20() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1108.86px] top-0 w-[326.141px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text27 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell17 />
      <HeaderCell18 />
      <HeaderCell19 />
      <HeaderCell20 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow4 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[492.375px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text28 />
    </div>
  );
}

function CorrelationMatrix17() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[120.41px] top-[14.5px] w-[32.719px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.67</p>
    </div>
  );
}

function SlotClone15() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[492.38px] top-0 w-[273.531px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix17 />
    </div>
  );
}

function CorrelationMatrix18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[154.88px] top-[14.5px] w-[33.188px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.52</p>
    </div>
  );
}

function SlotClone16() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[765.91px] top-0 w-[342.953px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix18 />
    </div>
  );
}

function CorrelationMatrix19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[145.8px] top-[14.5px] w-[34.547px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.44</p>
    </div>
  );
}

function SlotClone17() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1108.86px] top-0 w-[326.141px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix19 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell2 />
      <SlotClone15 />
      <SlotClone16 />
      <SlotClone17 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow5 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader2 />
      <TableBody2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table2 />
    </div>
  );
}

function CorrelationMatrix20() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-800 tracking-[0.08px] w-[min-content]">Sesión 1: Cristian Narváez</p>
          <CorrelationMatrix7 />
          <CorrelationMatrix16 />
          <CorrelationMatrix20 />
        </div>
      </div>
    </div>
  );
}

function TabPanel() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[1486px]" data-name="Tab Panel">
      <Card3 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[309.578px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[309.578px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ Estructuración semántica</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading11 />
    </div>
  );
}

function Text29() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell21() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[261.594px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[84.781px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Microdatos</p>
    </div>
  );
}

function HeaderCell22() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[261.59px] top-0 w-[159.547px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Microformatos</p>
    </div>
  );
}

function HeaderCell23() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[421.14px] top-0 w-[195.719px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[40.141px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">RDFa</p>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[616.86px] top-0 w-[145.328px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[70.984px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">JSON-LD</p>
    </div>
  );
}

function HeaderCell25() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[762.19px] top-0 w-[145.328px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[97.219px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Vocabularios</p>
    </div>
  );
}

function HeaderCell26() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[907.52px] top-0 w-[177.625px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.594px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Conj. de datos</p>
    </div>
  );
}

function HeaderCell27() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1085.14px] top-0 w-[195.609px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[81.094px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Ontologías</p>
    </div>
  );
}

function HeaderCell28() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1280.75px] top-0 w-[154.25px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text36 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell21 />
      <HeaderCell22 />
      <HeaderCell23 />
      <HeaderCell24 />
      <HeaderCell25 />
      <HeaderCell26 />
      <HeaderCell27 />
      <HeaderCell28 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow6 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[261.594px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text37 />
    </div>
  );
}

function CorrelationMatrix21() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[62.53px] top-[14.5px] w-[34.469px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.43</p>
    </div>
  );
}

function SlotClone18() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[261.59px] top-0 w-[159.547px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix21 />
    </div>
  );
}

function CorrelationMatrix22() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[81.05px] top-[14.5px] w-[33.625px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.38</p>
    </div>
  );
}

function SlotClone19() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[421.14px] top-0 w-[195.719px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix22 />
    </div>
  );
}

function CorrelationMatrix23() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[56.89px] top-[14.5px] w-[31.547px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.41</p>
    </div>
  );
}

function SlotClone20() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[616.86px] top-0 w-[145.328px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix23 />
    </div>
  );
}

function CorrelationMatrix24() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[55.92px] top-[14.5px] w-[33.484px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.56</p>
    </div>
  );
}

function SlotClone21() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[762.19px] top-0 w-[145.328px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix24 />
    </div>
  );
}

function CorrelationMatrix25() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[72.19px] top-[14.5px] w-[33.25px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.62</p>
    </div>
  );
}

function SlotClone22() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[907.52px] top-0 w-[177.625px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix25 />
    </div>
  );
}

function CorrelationMatrix26() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[81.06px] top-[14.5px] w-[33.484px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.59</p>
    </div>
  );
}

function SlotClone23() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1085.14px] top-0 w-[195.609px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix26 />
    </div>
  );
}

function CorrelationMatrix27() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[61.66px] top-[14.5px] w-[30.938px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.51</p>
    </div>
  );
}

function SlotClone24() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1280.75px] top-0 w-[154.25px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix27 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell3 />
      <SlotClone18 />
      <SlotClone19 />
      <SlotClone20 />
      <SlotClone21 />
      <SlotClone22 />
      <SlotClone23 />
      <SlotClone24 />
    </div>
  );
}

function TableBody3() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow7 />
    </div>
  );
}

function Table3() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader3 />
      <TableBody3 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table3 />
    </div>
  );
}

function CorrelationMatrix28() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146.406px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[146.406px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ FAIR</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading12 />
    </div>
  );
}

function Text38() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell29() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[254.625px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.391px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Adopción FAIR</p>
    </div>
  );
}

function HeaderCell30() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[254.63px] top-0 w-[190.109px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[16.828px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F1</p>
    </div>
  );
}

function HeaderCell31() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[444.73px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.078px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F2</p>
    </div>
  );
}

function HeaderCell32() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[586.19px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.578px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F3</p>
    </div>
  );
}

function HeaderCell33() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[727.64px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text42 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F4</p>
    </div>
  );
}

function HeaderCell34() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[869.09px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[11.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I1</p>
    </div>
  );
}

function HeaderCell35() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1010.55px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[13.922px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I2</p>
    </div>
  );
}

function HeaderCell36() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1152px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[14.422px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I3</p>
    </div>
  );
}

function HeaderCell37() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1293.45px] top-0 w-[141.547px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text46 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell29 />
      <HeaderCell30 />
      <HeaderCell31 />
      <HeaderCell32 />
      <HeaderCell33 />
      <HeaderCell34 />
      <HeaderCell35 />
      <HeaderCell36 />
      <HeaderCell37 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow8 />
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[254.625px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text47 />
    </div>
  );
}

function CorrelationMatrix29() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[78.75px] top-[14.5px] w-[32.594px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">0.72</p>
    </div>
  );
}

function SlotClone25() {
  return (
    <div className="absolute bg-green-700 h-[49px] left-[254.63px] top-0 w-[190.109px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix29 />
    </div>
  );
}

function CorrelationMatrix30() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54px] top-[14.5px] w-[33.438px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.68</p>
    </div>
  );
}

function SlotClone26() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[444.73px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix30 />
    </div>
  );
}

function CorrelationMatrix31() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[53.83px] top-[14.5px] w-[33.781px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.54</p>
    </div>
  );
}

function SlotClone27() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[586.19px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix31 />
    </div>
  );
}

function CorrelationMatrix32() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[55.22px] top-[14.5px] w-[31px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.61</p>
    </div>
  );
}

function SlotClone28() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[727.64px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix32 />
    </div>
  );
}

function CorrelationMatrix33() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.03px] top-[14.5px] w-[33.375px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.58</p>
    </div>
  );
}

function SlotClone29() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[869.09px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix33 />
    </div>
  );
}

function CorrelationMatrix34() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[53.59px] top-[14.5px] w-[34.25px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.49</p>
    </div>
  );
}

function SlotClone30() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1010.55px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix34 />
    </div>
  );
}

function CorrelationMatrix35() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.13px] top-[14.5px] w-[33.188px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.52</p>
    </div>
  );
}

function SlotClone31() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1152px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix35 />
    </div>
  );
}

function CorrelationMatrix36() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.06px] top-[14.5px] w-[33.422px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.47</p>
    </div>
  );
}

function SlotClone32() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1293.45px] top-0 w-[141.547px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix36 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell4 />
      <SlotClone25 />
      <SlotClone26 />
      <SlotClone27 />
      <SlotClone28 />
      <SlotClone29 />
      <SlotClone30 />
      <SlotClone31 />
      <SlotClone32 />
    </div>
  );
}

function TableBody4() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow9 />
    </div>
  );
}

function Table4() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader4 />
      <TableBody4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table4 />
    </div>
  );
}

function CorrelationMatrix37() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[207.109px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[207.109px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ Calidad web</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading13 />
    </div>
  );
}

function Text48() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell38() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[492.375px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[31.969px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">SEO</p>
    </div>
  );
}

function HeaderCell39() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[492.38px] top-0 w-[273.531px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[100.375px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Accesibilidad</p>
    </div>
  );
}

function HeaderCell40() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[765.91px] top-0 w-[342.953px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[94.219px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Rendimiento</p>
    </div>
  );
}

function HeaderCell41() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1108.86px] top-0 w-[326.141px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text51 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell38 />
      <HeaderCell39 />
      <HeaderCell40 />
      <HeaderCell41 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow10 />
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[492.375px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text52 />
    </div>
  );
}

function CorrelationMatrix38() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[120.41px] top-[14.5px] w-[32.719px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.67</p>
    </div>
  );
}

function SlotClone33() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[492.38px] top-0 w-[273.531px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix38 />
    </div>
  );
}

function CorrelationMatrix39() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[154.88px] top-[14.5px] w-[33.188px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.52</p>
    </div>
  );
}

function SlotClone34() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[765.91px] top-0 w-[342.953px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix39 />
    </div>
  );
}

function CorrelationMatrix40() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[145.8px] top-[14.5px] w-[34.547px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.44</p>
    </div>
  );
}

function SlotClone35() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1108.86px] top-0 w-[326.141px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix40 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell5 />
      <SlotClone33 />
      <SlotClone34 />
      <SlotClone35 />
    </div>
  );
}

function TableBody5() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow11 />
    </div>
  );
}

function Table5() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader5 />
      <TableBody5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table5 />
    </div>
  );
}

function CorrelationMatrix41() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-800 tracking-[0.08px] w-[min-content]">Sesión 2: Clímaco Rodríguez</p>
          <CorrelationMatrix28 />
          <CorrelationMatrix37 />
          <CorrelationMatrix41 />
        </div>
      </div>
    </div>
  );
}

function TabPanel1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[1486px]" data-name="Tab Panel">
      <Card4 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[309.578px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[309.578px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ Estructuración semántica</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Text53() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell42() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[261.594px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[84.781px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Microdatos</p>
    </div>
  );
}

function HeaderCell43() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[261.59px] top-0 w-[159.547px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Microformatos</p>
    </div>
  );
}

function HeaderCell44() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[421.14px] top-0 w-[195.719px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text55 />
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[40.141px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">RDFa</p>
    </div>
  );
}

function HeaderCell45() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[616.86px] top-0 w-[145.328px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text56 />
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[70.984px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">JSON-LD</p>
    </div>
  );
}

function HeaderCell46() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[762.19px] top-0 w-[145.328px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[97.219px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Vocabularios</p>
    </div>
  );
}

function HeaderCell47() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[907.52px] top-0 w-[177.625px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text58 />
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.594px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Conj. de datos</p>
    </div>
  );
}

function HeaderCell48() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1085.14px] top-0 w-[195.609px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[81.094px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Ontologías</p>
    </div>
  );
}

function HeaderCell49() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1280.75px] top-0 w-[154.25px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text60 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell42 />
      <HeaderCell43 />
      <HeaderCell44 />
      <HeaderCell45 />
      <HeaderCell46 />
      <HeaderCell47 />
      <HeaderCell48 />
      <HeaderCell49 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow12 />
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[261.594px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text61 />
    </div>
  );
}

function CorrelationMatrix42() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[62.53px] top-[14.5px] w-[34.469px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.43</p>
    </div>
  );
}

function SlotClone36() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[261.59px] top-0 w-[159.547px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix42 />
    </div>
  );
}

function CorrelationMatrix43() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[81.05px] top-[14.5px] w-[33.625px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.38</p>
    </div>
  );
}

function SlotClone37() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[421.14px] top-0 w-[195.719px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix43 />
    </div>
  );
}

function CorrelationMatrix44() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[56.89px] top-[14.5px] w-[31.547px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.41</p>
    </div>
  );
}

function SlotClone38() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[616.86px] top-0 w-[145.328px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix44 />
    </div>
  );
}

function CorrelationMatrix45() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[55.92px] top-[14.5px] w-[33.484px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.56</p>
    </div>
  );
}

function SlotClone39() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[762.19px] top-0 w-[145.328px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix45 />
    </div>
  );
}

function CorrelationMatrix46() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[72.19px] top-[14.5px] w-[33.25px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.62</p>
    </div>
  );
}

function SlotClone40() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[907.52px] top-0 w-[177.625px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix46 />
    </div>
  );
}

function CorrelationMatrix47() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[81.06px] top-[14.5px] w-[33.484px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.59</p>
    </div>
  );
}

function SlotClone41() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1085.14px] top-0 w-[195.609px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix47 />
    </div>
  );
}

function CorrelationMatrix48() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[61.66px] top-[14.5px] w-[30.938px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.51</p>
    </div>
  );
}

function SlotClone42() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1280.75px] top-0 w-[154.25px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix48 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell6 />
      <SlotClone36 />
      <SlotClone37 />
      <SlotClone38 />
      <SlotClone39 />
      <SlotClone40 />
      <SlotClone41 />
      <SlotClone42 />
    </div>
  );
}

function TableBody6() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow13 />
    </div>
  );
}

function Table6() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader6 />
      <TableBody6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table6 />
    </div>
  );
}

function CorrelationMatrix49() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146.406px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[146.406px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ FAIR</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading15 />
    </div>
  );
}

function Text62() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell50() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[254.625px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[109.391px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Adopción FAIR</p>
    </div>
  );
}

function HeaderCell51() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[254.63px] top-0 w-[190.109px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text63 />
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[16.828px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F1</p>
    </div>
  );
}

function HeaderCell52() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[444.73px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text64 />
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.078px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F2</p>
    </div>
  );
}

function HeaderCell53() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[586.19px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text65 />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.578px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F3</p>
    </div>
  );
}

function HeaderCell54() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[727.64px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[19.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">F4</p>
    </div>
  );
}

function HeaderCell55() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[869.09px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text67 />
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[11.672px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I1</p>
    </div>
  );
}

function HeaderCell56() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1010.55px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text68 />
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[13.922px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I2</p>
    </div>
  );
}

function HeaderCell57() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1152px] top-0 w-[141.453px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text69 />
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[14.422px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">I3</p>
    </div>
  );
}

function HeaderCell58() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1293.45px] top-0 w-[141.547px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text70 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell50 />
      <HeaderCell51 />
      <HeaderCell52 />
      <HeaderCell53 />
      <HeaderCell54 />
      <HeaderCell55 />
      <HeaderCell56 />
      <HeaderCell57 />
      <HeaderCell58 />
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow14 />
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[254.625px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text71 />
    </div>
  );
}

function CorrelationMatrix50() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[78.75px] top-[14.5px] w-[32.594px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">0.72</p>
    </div>
  );
}

function SlotClone43() {
  return (
    <div className="absolute bg-green-700 h-[49px] left-[254.63px] top-0 w-[190.109px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix50 />
    </div>
  );
}

function CorrelationMatrix51() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54px] top-[14.5px] w-[33.438px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.68</p>
    </div>
  );
}

function SlotClone44() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[444.73px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix51 />
    </div>
  );
}

function CorrelationMatrix52() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[53.83px] top-[14.5px] w-[33.781px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.54</p>
    </div>
  );
}

function SlotClone45() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[586.19px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix52 />
    </div>
  );
}

function CorrelationMatrix53() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[55.22px] top-[14.5px] w-[31px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.61</p>
    </div>
  );
}

function SlotClone46() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[727.64px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix53 />
    </div>
  );
}

function CorrelationMatrix54() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.03px] top-[14.5px] w-[33.375px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.58</p>
    </div>
  );
}

function SlotClone47() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[869.09px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix54 />
    </div>
  );
}

function CorrelationMatrix55() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[53.59px] top-[14.5px] w-[34.25px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.49</p>
    </div>
  );
}

function SlotClone48() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1010.55px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix55 />
    </div>
  );
}

function CorrelationMatrix56() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.13px] top-[14.5px] w-[33.188px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.52</p>
    </div>
  );
}

function SlotClone49() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1152px] top-0 w-[141.453px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix56 />
    </div>
  );
}

function CorrelationMatrix57() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[54.06px] top-[14.5px] w-[33.422px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.47</p>
    </div>
  );
}

function SlotClone50() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1293.45px] top-0 w-[141.547px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix57 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell7 />
      <SlotClone43 />
      <SlotClone44 />
      <SlotClone45 />
      <SlotClone46 />
      <SlotClone47 />
      <SlotClone48 />
      <SlotClone49 />
      <SlotClone50 />
    </div>
  );
}

function TableBody7() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow15 />
    </div>
  );
}

function Table7() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader7 />
      <TableBody7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table7 />
    </div>
  );
}

function CorrelationMatrix58() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[207.109px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[207.109px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Pertinencia ↔ Calidad web</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading16 />
    </div>
  );
}

function Text72() {
  return <div className="absolute h-[20px] left-[12.5px] top-[14.5px] w-[60.844px]" data-name="Text" />;
}

function HeaderCell59() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[492.375px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text72 />
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[31.969px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">SEO</p>
    </div>
  );
}

function HeaderCell60() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[492.38px] top-0 w-[273.531px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text73 />
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[100.375px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Accesibilidad</p>
    </div>
  );
}

function HeaderCell61() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[765.91px] top-0 w-[342.953px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[94.219px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Rendimiento</p>
    </div>
  );
}

function HeaderCell62() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-[1108.86px] top-0 w-[326.141px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text75 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <HeaderCell59 />
      <HeaderCell60 />
      <HeaderCell61 />
      <HeaderCell62 />
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[0.5px] w-[1435px]" data-name="Table Header">
      <TableRow16 />
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.5px] top-[14.5px] w-[85.297px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Pertinencia</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute bg-gray-100 h-[49px] left-0 top-0 w-[492.375px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text76 />
    </div>
  );
}

function CorrelationMatrix59() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[120.41px] top-[14.5px] w-[32.719px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.67</p>
    </div>
  );
}

function SlotClone51() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[492.38px] top-0 w-[273.531px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix59 />
    </div>
  );
}

function CorrelationMatrix60() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[154.88px] top-[14.5px] w-[33.188px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.52</p>
    </div>
  );
}

function SlotClone52() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[765.91px] top-0 w-[342.953px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix60 />
    </div>
  );
}

function CorrelationMatrix61() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[145.8px] top-[14.5px] w-[34.547px]" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0.44</p>
    </div>
  );
}

function SlotClone53() {
  return (
    <div className="absolute bg-green-400 h-[49px] left-[1108.86px] top-0 w-[326.141px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix61 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[1435px]" data-name="Table Row">
      <TableCell8 />
      <SlotClone51 />
      <SlotClone52 />
      <SlotClone53 />
    </div>
  );
}

function TableBody8() {
  return (
    <div className="absolute h-[49px] left-[0.5px] top-[49.5px] w-[1435px]" data-name="Table Body">
      <TableRow17 />
    </div>
  );
}

function Table8() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Table">
      <TableHeader8 />
      <TableBody8 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table8 />
    </div>
  );
}

function CorrelationMatrix62() {
  return (
    <div className="relative shrink-0 w-[1436px]" data-name="CorrelationMatrix">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[1436px]">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-800 tracking-[0.08px] w-[min-content]">Sesión 3: Pepito Perez</p>
          <CorrelationMatrix49 />
          <CorrelationMatrix58 />
          <CorrelationMatrix62 />
        </div>
      </div>
    </div>
  );
}

function TabPanel2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[1486px]" data-name="Tab Panel">
      <Card5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] items-start relative">
        <TabPanel />
        <TabPanel1 />
        <TabPanel2 />
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1486px]" data-name="Primitive.div">
      <Container21 />
      <App />
      <Frame1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full" data-name="Section">
      <Container9 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Link() {
  return (
    <div className="box-border content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[8px] h-[38px] items-center leading-[24px] not-italic px-[12px] py-0 relative rounded-[8px] shrink-0 text-[16px] text-center text-nowrap tracking-[0.08px] whitespace-pre" data-name="Link">
      <p className="relative shrink-0 text-gray-600">«</p>
      <p className="relative shrink-0 text-gray-500">Anterior</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-gray-200 content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[38px]" data-name="Link">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-500 text-nowrap tracking-[0.08px] whitespace-pre">1</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[38px]" data-name="Link">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-500 text-nowrap tracking-[0.08px] whitespace-pre">2</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[38px]" data-name="Link">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-500 text-nowrap tracking-[0.08px] whitespace-pre">3</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[38px]" data-name="Link">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-gray-500 text-nowrap tracking-[0.06px] whitespace-pre">•••</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[38px]" data-name="Link">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-500 text-nowrap tracking-[0.08px] whitespace-pre">10</p>
    </div>
  );
}

function Inline() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Inline">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="box-border content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[8px] h-[38px] items-center leading-[24px] not-italic px-[12px] py-0 relative rounded-[8px] shrink-0 text-[16px] text-center text-nowrap tracking-[0.08px] whitespace-pre" data-name="Link">
      <p className="relative shrink-0 text-gray-500">Siguiente</p>
      <p className="relative shrink-0 text-gray-600">»</p>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0" data-name="_pagination">
      <Link />
      <Inline />
      <Link6 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Pagination">
      <Pagination />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-gray-800 text-nowrap top-[-1px] whitespace-pre">Objetivo del modelo</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 top-[-1px] w-[1398px]">Este dashboard presenta los resultados del modelo de evaluación de la encontrabilidad de la información, analizando cómo las variables de pertinencia, encontrabilidad, complejidad, calidad web, estructuración semántica y principios FAIR se correlacionan entre sí. Las correlaciones de Pearson permiten identificar patrones y validar hipótesis sobre los factores que mejoran la encontrabilidad de recursos digitales. Los resultados apoyan la toma de decisiones basada en evidencia para optimizar repositorios y sistemas de información.</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[rgba(243,244,246,0.3)] h-[158px] relative rounded-[8px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[158px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading17 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[2607px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[2607px] items-start pb-0 pt-[32px] px-[24px] relative w-full">
          <Section />
          <Section1 />
          <Pagination1 />
          <Section2 />
        </div>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[1534px]" data-name="App">
      <Container1 />
      <Container40 />
    </div>
  );
}

export default function InteractiveAnalyticalDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="Interactive Analytical Dashboard">
      <App1 />
    </div>
  );
}