import Image from "next/image";

export default function EditableImage({link}) {
  return (
    <>
      {link && (
        <Image className="rounded-lg w-full h-full mb-1" src={link} width={250} height={250} alt={'food'} />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
    </>
  );
}