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

export default function Pagination1() {
  return (
    <div className="content-stretch flex items-start justify-center relative size-full" data-name="Pagination">
      <Pagination />
    </div>
  );
}