import svgPaths from "./svg-gnd1wjf56p";

function Heading1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[54px] left-0 not-italic text-[36px] text-gray-800 text-nowrap top-0 whitespace-pre">
        <span>{`Reporte `}</span>
        <span className="text-blue-700">EV</span>
        <span className="text-yellow-500">EN</span>
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[40px] py-[32px] relative w-full">
          <Heading1 />
        </div>
      </div>
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
            <path d={svgPaths.p2d238840} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Container1() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Cantidad de sesiones</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">10</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start relative w-full">
        <Paragraph />
        <Heading2 />
      </div>
    </div>
  );
}

function IndicatorCard() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[431px]" data-name="IndicatorCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[431px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <IndicatorCard />
        </div>
      </div>
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

function Container3() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Total de recursos calificados</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">142</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start relative w-full">
        <Paragraph1 />
        <Heading3 />
      </div>
    </div>
  );
}

function IndicatorCard1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[431px]" data-name="IndicatorCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[431px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <IndicatorCard1 />
        </div>
      </div>
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

function Container5() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-600 text-nowrap top-[-1px] whitespace-pre">Tiempo promedio de sesión</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-gray-800 text-nowrap top-px whitespace-pre">12.4 min</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start relative w-full">
        <Paragraph2 />
        <Heading4 />
      </div>
    </div>
  );
}

function IndicatorCard2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[431px]" data-name="IndicatorCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[431px]">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <IndicatorCard2 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[24px] h-[105px] items-start relative shrink-0 w-full" data-name="Section">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute contents inset-[26.17%_33.54%_70.82%_65.08%]" data-name="Group">
      <div className="absolute inset-[26.17%_33.54%_70.82%_65.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute contents inset-[31.54%_64.04%_65.45%_34.58%]" data-name="Group">
      <div className="absolute inset-[31.54%_64.04%_65.45%_34.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute contents inset-[31.38%_25.58%_65.61%_73.04%]" data-name="Group">
      <div className="absolute inset-[31.38%_25.58%_65.61%_73.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute contents inset-[19.42%_87.77%_75.58%_9.79%]" data-name="Group">
      <div className="absolute inset-[22%_87.77%_78%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.42%_88.99%_75.58%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">4</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="h-[29px] relative rounded-[12px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">General</p>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[29px] relative rounded-[8px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-blue-700 text-nowrap tracking-[0.08px] whitespace-pre">Recursos</p>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="h-[29px] relative rounded-[12px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Tarea</p>
      </div>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="h-[29px] relative rounded-[12px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Sesión individual</p>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-name="Primitive.div">
      <PrimitiveButton />
      <PrimitiveButton1 />
      <PrimitiveButton2 />
      <PrimitiveButton3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-[446px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-[446px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-gray-800 w-[min-content]">Reporte a nivel</p>
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[1486px]" data-name="App">
      <Frame18 />
    </div>
  );
}

function CorrelationMatrix() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap tracking-[0.08px] whitespace-pre">Top</p>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[108px] items-center justify-center px-[32px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix />
    </div>
  );
}

function CorrelationMatrix1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap tracking-[0.08px] whitespace-pre">Recurso</p>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="basis-0 bg-white grow h-[108px] min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[108px] items-center justify-center px-[54px] py-[15px] relative w-full">
          <CorrelationMatrix1 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="CorrelationMatrix">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Calificaciones</p>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[108px] items-center justify-center px-[8px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix2 />
    </div>
  );
}

function CorrelationMatrix3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap tracking-[0.08px] whitespace-pre">Pertinencia</p>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[54px] items-center justify-center px-[54px] py-[15px] relative w-full">
          <CorrelationMatrix3 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap tracking-[0.08px] whitespace-pre">Alta</p>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[64px] py-[15px] relative w-full">
          <CorrelationMatrix4 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap tracking-[0.08px] whitespace-pre">Media</p>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[54px] py-[15px] relative w-full">
          <CorrelationMatrix5 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap tracking-[0.08px] whitespace-pre">Baja</p>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[58px] py-[15px] relative w-full">
          <CorrelationMatrix6 />
        </div>
      </div>
    </div>
  );
}

function PertinenceScore() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Pertinence score">
      <SlotClone5 />
      <SlotClone6 />
      <SlotClone7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <SlotClone4 />
      <PertinenceScore />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
      <SlotClone1 />
      <SlotClone2 />
      <SlotClone3 />
      <Frame11 />
    </div>
  );
}

function CorrelationMatrix7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap tracking-[0.08px] whitespace-pre">1</p>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[32px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix7 />
    </div>
  );
}

function CorrelationMatrix8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="CorrelationMatrix">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-800 text-nowrap">{`https://www.youtube.com/watch?v=xohWk9q8Vu4&list=RDN9PLybregJ4&index=12`}</p>
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative size-full">
          <CorrelationMatrix8 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function SlotClone10() {
  return (
    <div className="bg-gray-100 h-full relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[54px] py-[15px] relative w-[80px]">
          <CorrelationMatrix9 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function SlotClone11() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[64px] py-[15px] relative size-full">
          <CorrelationMatrix10 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function SlotClone12() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[54px] py-[15px] relative size-full">
          <CorrelationMatrix11 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone13() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[58px] py-[15px] relative size-full">
          <CorrelationMatrix12 />
        </div>
      </div>
    </div>
  );
}

function PertinenceScore1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[240px]" data-name="Pertinence score">
      <SlotClone11 />
      <SlotClone12 />
      <SlotClone13 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <SlotClone8 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <SlotClone9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SlotClone10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <PertinenceScore1 />
      </div>
    </div>
  );
}

function CorrelationMatrix13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap tracking-[0.08px] whitespace-pre">2</p>
    </div>
  );
}

function SlotClone14() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[32px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix13 />
    </div>
  );
}

function CorrelationMatrix14() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="CorrelationMatrix">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-800 text-nowrap">{`https://www.youtube.com/watch?v=xyz123456&list=RDN9PLybregJ4&index=13`}</p>
    </div>
  );
}

function SlotClone15() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative size-full">
          <CorrelationMatrix14 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function SlotClone16() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[54px] py-[15px] relative w-[80px]">
          <CorrelationMatrix15 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function SlotClone17() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[64px] py-[15px] relative size-full">
          <CorrelationMatrix16 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone18() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[54px] py-[15px] relative size-full">
          <CorrelationMatrix17 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone19() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[58px] py-[15px] relative size-full">
          <CorrelationMatrix18 />
        </div>
      </div>
    </div>
  );
}

function PertinenceScore2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[240px]" data-name="Pertinence score">
      <SlotClone17 />
      <SlotClone18 />
      <SlotClone19 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <SlotClone14 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <SlotClone15 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SlotClone16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <PertinenceScore2 />
      </div>
    </div>
  );
}

function CorrelationMatrix19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap tracking-[0.08px] whitespace-pre">3</p>
    </div>
  );
}

function SlotClone20() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[32px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix19 />
    </div>
  );
}

function CorrelationMatrix20() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="CorrelationMatrix">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-800 text-nowrap">{`https://www.youtube.com/watch?v=xyz123456&list=RDN9PLybregJ4&index=13`}</p>
    </div>
  );
}

function SlotClone21() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative size-full">
          <CorrelationMatrix20 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function SlotClone22() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[54px] py-[15px] relative w-[80px]">
          <CorrelationMatrix21 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function SlotClone23() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[64px] py-[15px] relative size-full">
          <CorrelationMatrix22 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone24() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[54px] py-[15px] relative size-full">
          <CorrelationMatrix23 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone25() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[58px] py-[15px] relative size-full">
          <CorrelationMatrix24 />
        </div>
      </div>
    </div>
  );
}

function PertinenceScore3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[240px]" data-name="Pertinence score">
      <SlotClone23 />
      <SlotClone24 />
      <SlotClone25 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <SlotClone20 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <SlotClone21 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SlotClone22 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <PertinenceScore3 />
      </div>
    </div>
  );
}

function CorrelationMatrix25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap tracking-[0.08px] whitespace-pre">4</p>
    </div>
  );
}

function SlotClone26() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[32px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix25 />
    </div>
  );
}

function CorrelationMatrix26() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="CorrelationMatrix">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-800 text-nowrap">{`https://www.youtube.com/watch?v=xyz123456&list=RDN9PLybregJ4&index=13`}</p>
    </div>
  );
}

function SlotClone27() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative size-full">
          <CorrelationMatrix26 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function SlotClone28() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[54px] py-[15px] relative w-[80px]">
          <CorrelationMatrix27 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function SlotClone29() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[64px] py-[15px] relative size-full">
          <CorrelationMatrix28 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone30() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[54px] py-[15px] relative size-full">
          <CorrelationMatrix29 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone31() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[58px] py-[15px] relative size-full">
          <CorrelationMatrix30 />
        </div>
      </div>
    </div>
  );
}

function PertinenceScore4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[240px]" data-name="Pertinence score">
      <SlotClone29 />
      <SlotClone30 />
      <SlotClone31 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <SlotClone26 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <SlotClone27 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SlotClone28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <PertinenceScore4 />
      </div>
    </div>
  );
}

function CorrelationMatrix31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap tracking-[0.08px] whitespace-pre">5</p>
    </div>
  );
}

function SlotClone32() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[32px] py-[15px] relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <CorrelationMatrix31 />
    </div>
  );
}

function CorrelationMatrix32() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="CorrelationMatrix">
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-800 text-nowrap">{`https://www.youtube.com/watch?v=xyz123456&list=RDN9PLybregJ4&index=13`}</p>
    </div>
  );
}

function SlotClone33() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative size-full">
          <CorrelationMatrix32 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function SlotClone34() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[80px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center px-[54px] py-[15px] relative w-[80px]">
          <CorrelationMatrix33 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function SlotClone35() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[64px] py-[15px] relative size-full">
          <CorrelationMatrix34 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone36() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[54px] py-[15px] relative size-full">
          <CorrelationMatrix35 />
        </div>
      </div>
    </div>
  );
}

function CorrelationMatrix36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="CorrelationMatrix">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function SlotClone37() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[58px] py-[15px] relative size-full">
          <CorrelationMatrix36 />
        </div>
      </div>
    </div>
  );
}

function PertinenceScore5() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[240px]" data-name="Pertinence score">
      <SlotClone35 />
      <SlotClone36 />
      <SlotClone37 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <SlotClone32 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <SlotClone33 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SlotClone34 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <PertinenceScore5 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Header />
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Table />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Microdatos</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Microformatos</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. RDFa</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. JSONLD</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Vocabularios</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. ConjDatos</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Ontologías</p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function SlotClone38() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone39() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone41() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">20</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone43() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">1</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SlotClone38 />
      <SlotClone39 />
      <SlotClone39 />
      <SlotClone41 />
      <SlotClone39 />
      <SlotClone43 />
      <SlotClone38 />
    </div>
  );
}

function Table1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TableRow />
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Prom. tecnologías semánticas</p>
      <Table1 />
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">SEO</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Accesibility</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
    </div>
  );
}

function SlotClone45() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">95%</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone46() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">91%</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone47() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">45%</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SlotClone45 />
      <SlotClone46 />
      <SlotClone47 />
    </div>
  );
}

function Table2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TableRow1 />
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Prom. evaluación calidad web</p>
      <Table2 />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">FAIR</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F1</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F2</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F3</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F4</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">I1</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">I2</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">I3</p>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell10 />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
      <HeaderCell16 />
      <HeaderCell17 />
    </div>
  );
}

function SlotClone48() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">43</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone49() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">55</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone50() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">64</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone51() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone53() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">12</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone54() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">27</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SlotClone48 />
      <SlotClone49 />
      <SlotClone50 />
      <SlotClone51 />
      <SlotClone51 />
      <SlotClone53 />
      <SlotClone54 />
      <SlotClone51 />
    </div>
  );
}

function Table3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TableRow2 />
        <Frame19 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Prom. evaluación FAIR</p>
      <Table3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start leading-[24px] not-italic pb-0 pt-[16px] px-0 relative shrink-0 text-[16px] text-gray-800 text-nowrap w-full whitespace-pre">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">Prom. clics hasta encontrar</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">5 clics</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center leading-[24px] not-italic pb-0 pt-[16px] px-0 relative shrink-0 text-[16px] text-gray-800 text-nowrap w-full whitespace-pre">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">{`Prom. tiempo hasta encontrar `}</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">15 seg</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
      <Frame21 />
      <Frame16 />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center pb-0 pt-[32px] px-0 relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 w-full">Promedios del top 5</p>
      <Frame22 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pl-0 pr-[40px] pt-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 w-full">Top 5 recursos con mayor pertinencia</p>
          <Frame20 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative self-stretch shrink-0 w-[40px]">
      <div aria-hidden="true" className="absolute border-[4px_0px_4px_4px] border-gray-200 border-solid bottom-[-2px] left-[-2px] pointer-events-none right-0 top-[-2px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9999999403953552)+(var(--transform-inner-height)*0)))] items-center justify-center left-[-40.5px] top-[158px] w-[calc(1px*((var(--transform-inner-height)*0.9999999403953552)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "55" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[55px] relative w-[36px]">
            <div className="absolute bottom-1/4 left-[9.43%] right-[9.43%] top-[6.65%]" style={{ "--fill-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 38">
                <path d={svgPaths.pf4b000} fill="var(--fill-0, #E5E7EB)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Microdatos</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell19() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Microformatos</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell20() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. RDFa</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell21() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. JSONLD</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell22() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Vocabularios</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell23() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. ConjDatos</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Núm. Ontologías</p>
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell18 />
      <HeaderCell19 />
      <HeaderCell20 />
      <HeaderCell21 />
      <HeaderCell22 />
      <HeaderCell23 />
      <HeaderCell24 />
    </div>
  );
}

function SlotClone56() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone57() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone59() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">5</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone61() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">1</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SlotClone56 />
      <SlotClone57 />
      <SlotClone57 />
      <SlotClone59 />
      <SlotClone57 />
      <SlotClone61 />
      <SlotClone56 />
    </div>
  );
}

function Table4() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TableRow3 />
        <Frame26 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Tecnologías semánticas</p>
      <Table4 />
    </div>
  );
}

function HeaderCell25() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">SEO</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell26() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Accesibility</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell27() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell25 />
      <HeaderCell26 />
      <HeaderCell27 />
    </div>
  );
}

function SlotClone63() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">83%</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone64() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">91%</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone65() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">45%</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SlotClone63 />
      <SlotClone64 />
      <SlotClone65 />
    </div>
  );
}

function Table5() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TableRow4 />
        <Frame28 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Evaluación calidad web</p>
      <Table5 />
    </div>
  );
}

function HeaderCell28() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">FAIR</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell29() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F1</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell30() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F2</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell31() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F3</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell32() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">F4</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell33() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">I1</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell34() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">I2</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell35() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[13px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-gray-600 tracking-[0.08px]">I3</p>
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell28 />
      <HeaderCell29 />
      <HeaderCell30 />
      <HeaderCell31 />
      <HeaderCell32 />
      <HeaderCell33 />
      <HeaderCell34 />
      <HeaderCell35 />
    </div>
  );
}

function SlotClone66() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">43</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone67() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">55</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone68() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">64</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone69() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone71() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">12</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone72() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[11px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-gray-800 text-nowrap whitespace-pre">27</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SlotClone66 />
      <SlotClone67 />
      <SlotClone68 />
      <SlotClone69 />
      <SlotClone69 />
      <SlotClone71 />
      <SlotClone72 />
      <SlotClone69 />
    </div>
  );
}

function Table6() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TableRow5 />
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Evaluación FAIR</p>
      <Table6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[6.67%_3.06%_16.67%_12.23%]" data-name="Group">
      <div className="absolute inset-[83.33%_3.06%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.67%_3.06%_47.33%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[22%_3.06%_78%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_3.06%_93.33%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[6.67%_3.06%_16.67%_12.23%]" data-name="Group">
      <div className="absolute inset-[6.67%_87.77%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_53.88%_16.67%_46.12%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_20%_16.67%_80%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_3.06%_16.67%_96.94%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[6.67%_3.06%_16.67%_12.23%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[83.33%_87.16%_10.16%_11.62%]" data-name="Group">
      <div className="absolute inset-[83.33%_87.77%_14.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_87.16%_10.16%_11.62%] leading-[normal] not-italic text-[12px] text-black text-center">0</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[83.33%_53.27%_10.16%_45.51%]" data-name="Group">
      <div className="absolute inset-[83.33%_53.88%_14.67%_46.12%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_53.27%_10.16%_45.51%] leading-[normal] not-italic text-[12px] text-black text-center">2</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[83.33%_19.39%_10.16%_79.39%]" data-name="Group">
      <div className="absolute inset-[83.33%_20%_14.67%_80%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_19.39%_10.16%_79.39%] leading-[normal] not-italic text-[12px] text-black text-center">4</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[83.33%_2.45%_10.16%_96.33%]" data-name="Group">
      <div className="absolute inset-[83.33%_3.06%_14.67%_96.94%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_2.45%_10.16%_96.33%] leading-[normal] not-italic text-[12px] text-black text-center">5</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[83.33%_2.45%_10.16%_11.62%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[83.33%_2.45%_2.33%_11.62%]" data-name="Group">
      <div className="absolute inset-[83.33%_3.06%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Group7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[92.67%_41.44%_2.33%_50.61%] leading-[normal] not-italic text-[12px] text-[grey] text-center">Sesión</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[80.75%_87.77%_14.25%_9.79%]" data-name="Group">
      <div className="absolute inset-[83.33%_87.77%_16.67%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.75%_88.99%_14.25%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">0</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[50.09%_87.77%_44.91%_9.79%]" data-name="Group">
      <div className="absolute inset-[52.67%_87.77%_47.33%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[50.09%_88.99%_44.91%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">2</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[19.42%_87.77%_75.58%_9.79%]" data-name="Group">
      <div className="absolute inset-[22%_87.77%_78%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.42%_88.99%_75.58%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">4</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[4.09%_87.77%_90.91%_9.79%]" data-name="Group">
      <div className="absolute inset-[6.67%_87.77%_93.33%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[4.09%_88.99%_90.91%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">5</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[4.09%_87.77%_14.25%_9.79%]" data-name="Group">
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[4.09%_87.77%_14.25%_2.64%]" data-name="Group">
      <div className="absolute inset-[6.67%_87.77%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Group13 />
      <div className="absolute flex inset-[35.67%_95.07%_55%_2.64%] items-center justify-center">
        <div className="flex-none h-[15.447px] rotate-[270deg] w-[28px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative size-full text-[12px] text-[grey]">Clics</p>
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[26.17%_33.54%_70.82%_65.08%]" data-name="Group">
      <div className="absolute inset-[26.17%_33.54%_70.82%_65.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[22.34%_55.9%_74.66%_42.72%]" data-name="Group">
      <div className="absolute inset-[22.34%_55.9%_74.66%_42.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[22.34%_45.74%_74.66%_52.88%]" data-name="Group">
      <div className="absolute inset-[22.34%_45.74%_74.66%_52.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[32.15%_77.93%_64.84%_20.69%]" data-name="Group">
      <div className="absolute inset-[32.15%_77.93%_64.84%_20.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[19.11%_35.74%_77.88%_62.88%]" data-name="Group">
      <div className="absolute inset-[19.11%_35.74%_77.88%_62.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[37.98%_61.66%_59.02%_36.95%]" data-name="Group">
      <div className="absolute inset-[37.98%_61.66%_59.02%_36.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[11.14%_19.48%_85.85%_79.14%]" data-name="Group">
      <div className="absolute inset-[11.14%_19.48%_85.85%_79.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[32.45%_57.77%_64.53%_40.85%]" data-name="Group">
      <div className="absolute inset-[32.45%_57.77%_64.53%_40.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[14.36%_18.8%_82.63%_79.82%]" data-name="Group">
      <div className="absolute inset-[14.36%_18.8%_82.63%_79.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[22.03%_3.89%_74.96%_94.73%]" data-name="Group">
      <div className="absolute inset-[22.03%_3.89%_74.96%_94.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[31.38%_25.58%_65.61%_73.04%]" data-name="Group">
      <div className="absolute inset-[31.38%_25.58%_65.61%_73.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[29.08%_48.96%_67.91%_49.66%]" data-name="Group">
      <div className="absolute inset-[29.08%_48.96%_67.91%_49.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[13.13%_2.54%_83.86%_96.08%]" data-name="Group">
      <div className="absolute inset-[13.13%_2.54%_83.86%_96.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[27.86%_8.81%_69.14%_89.81%]" data-name="Group">
      <div className="absolute inset-[27.86%_8.81%_69.14%_89.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[30%_60.82%_66.99%_37.8%]" data-name="Group">
      <div className="absolute inset-[30%_60.82%_66.99%_37.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[31.54%_64.04%_65.45%_34.58%]" data-name="Group">
      <div className="absolute inset-[31.54%_64.04%_65.45%_34.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[34.14%_85.72%_62.85%_12.9%]" data-name="Group">
      <div className="absolute inset-[34.14%_85.72%_62.85%_12.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[32.91%_64.71%_64.08%_33.91%]" data-name="Group">
      <div className="absolute inset-[32.91%_64.71%_64.08%_33.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[33.68%_60.82%_63.31%_37.8%]" data-name="Group">
      <div className="absolute inset-[33.68%_60.82%_63.31%_37.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[8.23%_7.79%_88.76%_90.83%]" data-name="Group">
      <div className="absolute inset-[8.23%_7.79%_88.76%_90.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[46.87%_81.15%_50.12%_17.47%]" data-name="Group">
      <div className="absolute inset-[46.87%_81.15%_50.12%_17.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[25.25%_27.27%_71.74%_71.35%]" data-name="Group">
      <div className="absolute inset-[25.25%_27.27%_71.74%_71.35%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[18.5%_13.38%_78.49%_85.24%]" data-name="Group">
      <div className="absolute inset-[18.5%_13.38%_78.49%_85.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[34.91%_29.98%_62.08%_68.64%]" data-name="Group">
      <div className="absolute inset-[34.91%_29.98%_62.08%_68.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[49.48%_86.4%_47.52%_12.22%]" data-name="Group">
      <div className="absolute inset-[49.48%_86.4%_47.52%_12.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[29.23%_16.43%_67.75%_82.19%]" data-name="Group">
      <div className="absolute inset-[29.23%_16.43%_67.75%_82.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[47.63%_74.37%_49.35%_24.25%]" data-name="Group">
      <div className="absolute inset-[47.63%_74.37%_49.35%_24.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[21.41%_24.22%_75.58%_74.4%]" data-name="Group">
      <div className="absolute inset-[21.41%_24.22%_75.58%_74.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[36.44%_36.59%_60.55%_62.03%]" data-name="Group">
      <div className="absolute inset-[36.44%_36.59%_60.55%_62.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[18.66%_39.47%_78.33%_59.15%]" data-name="Group">
      <div className="absolute inset-[18.66%_39.47%_78.33%_59.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[8.23%_2.54%_47.52%_12.22%]" data-name="Group">
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[8.23%_2.54%_47.52%_12.22%]" data-name="Group">
      <Group45 />
    </div>
  );
}

function RechartsScatterR28() {
  return (
    <div className="absolute contents inset-[8.23%_2.54%_47.52%_12.22%]" data-name="recharts-scatter-:r28:">
      <Group46 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="basis-0 grow h-[300px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icon">
      <Group2 />
      <Group8 />
      <Group14 />
      <RechartsScatterR28 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[calc(50%-0.25px)] not-italic text-[16px] text-center text-gray-600 top-[-1px] translate-x-[-50%] w-[520px]">
        <span>{`Promedio: `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-gray-800">3 clics</span>
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Container8 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Clics hasta encontrar</p>
      <Container9 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[6.67%_3.06%_16.67%_12.23%]" data-name="Group">
      <div className="absolute inset-[83.33%_3.06%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.67%_3.06%_47.33%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[22%_3.06%_78%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_3.06%_93.33%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[6.67%_3.06%_16.67%_12.23%]" data-name="Group">
      <div className="absolute inset-[6.67%_87.77%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_53.88%_16.67%_46.12%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_20%_16.67%_80%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.67%_3.06%_16.67%_96.94%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[6.67%_3.06%_16.67%_12.23%]" data-name="Group">
      <Group47 />
      <Group48 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[83.33%_87.16%_10.16%_11.62%]" data-name="Group">
      <div className="absolute inset-[83.33%_87.77%_14.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_87.16%_10.16%_11.62%] leading-[normal] not-italic text-[12px] text-black text-center">0</p>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[83.33%_53.27%_10.16%_45.51%]" data-name="Group">
      <div className="absolute inset-[83.33%_53.88%_14.67%_46.12%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_53.27%_10.16%_45.51%] leading-[normal] not-italic text-[12px] text-black text-center">2</p>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[83.33%_19.39%_10.16%_79.39%]" data-name="Group">
      <div className="absolute inset-[83.33%_20%_14.67%_80%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_19.39%_10.16%_79.39%] leading-[normal] not-italic text-[12px] text-black text-center">4</p>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[83.33%_2.45%_10.16%_96.33%]" data-name="Group">
      <div className="absolute inset-[83.33%_3.06%_14.67%_96.94%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.84%_2.45%_10.16%_96.33%] leading-[normal] not-italic text-[12px] text-black text-center">5</p>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[83.33%_2.45%_10.16%_11.62%]" data-name="Group">
      <Group50 />
      <Group51 />
      <Group52 />
      <Group53 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[83.33%_2.45%_2.33%_11.62%]" data-name="Group">
      <div className="absolute inset-[83.33%_3.06%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 1">
            <path d="M0 0.5H570.518" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Group54 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[92.67%_41.44%_2.33%_50.61%] leading-[normal] not-italic text-[12px] text-[grey] text-center">Sesión</p>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[80.75%_87.77%_14.25%_9.79%]" data-name="Group">
      <div className="absolute inset-[83.33%_87.77%_16.67%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.75%_88.99%_14.25%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">0</p>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[50.09%_87.77%_44.91%_9.79%]" data-name="Group">
      <div className="absolute inset-[52.67%_87.77%_47.33%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[50.09%_88.99%_44.91%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">2</p>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[4.09%_87.77%_90.91%_9.79%]" data-name="Group">
      <div className="absolute inset-[6.67%_87.77%_93.33%_11.31%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0 0.5H6.1789" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[4.09%_88.99%_90.91%_9.79%] leading-[normal] not-italic text-[12px] text-black text-right">5</p>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[4.09%_87.77%_14.25%_9.79%]" data-name="Group">
      <Group56 />
      <Group57 />
      <Container7 />
      <Group59 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[4.09%_87.77%_14.25%_2.64%]" data-name="Group">
      <div className="absolute inset-[6.67%_87.77%_16.67%_12.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 230">
            <path d="M0.5 0V230" id="Vector" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Group60 />
      <div className="absolute flex inset-[30.67%_95.13%_55%_2.64%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[43px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[12px] text-[grey] text-nowrap whitespace-pre">Tiempo</p>
        </div>
      </div>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-[22.34%_55.9%_74.66%_42.72%]" data-name="Group">
      <div className="absolute inset-[22.34%_55.9%_74.66%_42.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[22.34%_45.74%_74.66%_52.88%]" data-name="Group">
      <div className="absolute inset-[22.34%_45.74%_74.66%_52.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[32.15%_77.93%_64.84%_20.69%]" data-name="Group">
      <div className="absolute inset-[32.15%_77.93%_64.84%_20.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[19.11%_35.74%_77.88%_62.88%]" data-name="Group">
      <div className="absolute inset-[19.11%_35.74%_77.88%_62.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[37.98%_61.66%_59.02%_36.95%]" data-name="Group">
      <div className="absolute inset-[37.98%_61.66%_59.02%_36.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents inset-[11.14%_19.48%_85.85%_79.14%]" data-name="Group">
      <div className="absolute inset-[11.14%_19.48%_85.85%_79.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[32.45%_57.77%_64.53%_40.85%]" data-name="Group">
      <div className="absolute inset-[32.45%_57.77%_64.53%_40.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[14.36%_18.8%_82.63%_79.82%]" data-name="Group">
      <div className="absolute inset-[14.36%_18.8%_82.63%_79.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[22.03%_3.89%_74.96%_94.73%]" data-name="Group">
      <div className="absolute inset-[22.03%_3.89%_74.96%_94.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents inset-[29.08%_48.96%_67.91%_49.66%]" data-name="Group">
      <div className="absolute inset-[29.08%_48.96%_67.91%_49.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[13.13%_2.54%_83.86%_96.08%]" data-name="Group">
      <div className="absolute inset-[13.13%_2.54%_83.86%_96.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[27.86%_8.81%_69.14%_89.81%]" data-name="Group">
      <div className="absolute inset-[27.86%_8.81%_69.14%_89.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[30%_60.82%_66.99%_37.8%]" data-name="Group">
      <div className="absolute inset-[30%_60.82%_66.99%_37.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[34.14%_85.72%_62.85%_12.9%]" data-name="Group">
      <div className="absolute inset-[34.14%_85.72%_62.85%_12.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[32.91%_64.71%_64.08%_33.91%]" data-name="Group">
      <div className="absolute inset-[32.91%_64.71%_64.08%_33.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[33.68%_60.82%_63.31%_37.8%]" data-name="Group">
      <div className="absolute inset-[33.68%_60.82%_63.31%_37.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[8.23%_7.79%_88.76%_90.83%]" data-name="Group">
      <div className="absolute inset-[8.23%_7.79%_88.76%_90.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents inset-[46.87%_81.15%_50.12%_17.47%]" data-name="Group">
      <div className="absolute inset-[46.87%_81.15%_50.12%_17.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[25.25%_27.27%_71.74%_71.35%]" data-name="Group">
      <div className="absolute inset-[25.25%_27.27%_71.74%_71.35%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents inset-[18.5%_13.38%_78.49%_85.24%]" data-name="Group">
      <div className="absolute inset-[18.5%_13.38%_78.49%_85.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents inset-[34.91%_29.98%_62.08%_68.64%]" data-name="Group">
      <div className="absolute inset-[34.91%_29.98%_62.08%_68.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[49.48%_86.4%_47.52%_12.22%]" data-name="Group">
      <div className="absolute inset-[49.48%_86.4%_47.52%_12.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[29.23%_16.43%_67.75%_82.19%]" data-name="Group">
      <div className="absolute inset-[29.23%_16.43%_67.75%_82.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents inset-[47.63%_74.37%_49.35%_24.25%]" data-name="Group">
      <div className="absolute inset-[47.63%_74.37%_49.35%_24.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents inset-[21.41%_24.22%_75.58%_74.4%]" data-name="Group">
      <div className="absolute inset-[21.41%_24.22%_75.58%_74.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[36.44%_36.59%_60.55%_62.03%]" data-name="Group">
      <div className="absolute inset-[36.44%_36.59%_60.55%_62.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute contents inset-[18.66%_39.47%_78.33%_59.15%]" data-name="Group">
      <div className="absolute inset-[18.66%_39.47%_78.33%_59.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p12dff100} fill="var(--fill-0, black)" id="Vector" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents inset-[8.23%_2.54%_47.52%_12.22%]" data-name="Group">
      <Heading5 />
      <Group63 />
      <Group64 />
      <Group65 />
      <Group66 />
      <Group67 />
      <Group68 />
      <Group69 />
      <Group70 />
      <Group71 />
      <SlotClone />
      <Group73 />
      <Group74 />
      <Group75 />
      <Group76 />
      <Icon3 />
      <Group78 />
      <Group79 />
      <Group80 />
      <Group81 />
      <Group82 />
      <Group83 />
      <Group84 />
      <Group85 />
      <Group86 />
      <Group87 />
      <Group88 />
      <Group89 />
      <Group90 />
      <Group91 />
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute contents inset-[8.23%_2.54%_47.52%_12.22%]" data-name="Group">
      <Group92 />
    </div>
  );
}

function RechartsScatterR29() {
  return (
    <div className="absolute contents inset-[8.23%_2.54%_47.52%_12.22%]" data-name="recharts-scatter-:r28:">
      <Group93 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="basis-0 grow h-[300px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icon">
      <Group49 />
      <Group55 />
      <Group61 />
      <RechartsScatterR29 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[calc(50%-0.25px)] not-italic text-[16px] text-center text-gray-600 top-[-1px] translate-x-[-50%] w-[520px]">
        <span>{`Promedio: `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-gray-800">20 seg</span>
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Container10 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">Tiempo hasta encontrar</p>
      <Container11 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px px-0 py-[32px] relative shrink-0">
      <Frame27 />
      <Frame29 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <Frame12 />
        <Frame23 />
        <Frame34 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <Frame35 />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <App />
      <Card3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Section">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start px-[40px] py-0 relative w-full">
          <Section />
          <Section1 />
        </div>
      </div>
    </div>
  );
}

export default function InteractiveAnalyticalDashboard() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start pb-[40px] pt-0 px-0 relative size-full" data-name="Interactive Analytical Dashboard">
      <Container />
      <Container13 />
    </div>
  );
}