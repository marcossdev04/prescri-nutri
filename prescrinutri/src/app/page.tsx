export default function Home() {
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-[50%]">
        <div>Prescinutri</div>
        <h1 className="flex justify-center text-xl font-semibold text-green-900 py-5">Prescrições Manipuladas</h1>
        <div className="flex flex-col gap-10">
          <div>
            <div className=" bg-green-600 bg-opacity-85 py-1 px-3">
              <h1 className="font-semibold text-lg">
                Magnésio
              </h1>
            </div>
            <div className="border grid grid-cols-10 bg-green-600 bg-opacity-20 px-3">
              <div className="col-span-4 font-medium">Magnésio treonato</div>
              <div className="col-span-6 font-medium">260mg</div>
            </div>
            <div className="border grid grid-cols-10 px-3">
              <div className="col-span-4 font-medium">Magnésio treonato</div>
              <div className="col-span-6 font-medium">260mg</div>
            </div>
          </div>
          <div>
            <div className=" bg-green-600 bg-opacity-85 py-1 px-3">
              <h1 className="font-semibold text-lg">
                Magnésio
              </h1>
            </div>
            <div className="border grid grid-cols-10 bg-green-600 bg-opacity-20 px-3">
              <div className="col-span-4 font-medium">Magnésio treonato</div>
              <div className="col-span-6 font-medium">260mg</div>
            </div>
            <div className="border grid grid-cols-10 px-3">
              <div className="col-span-4 font-medium">Magnésio treonato</div>
              <div className="col-span-6 font-medium">260mg</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
