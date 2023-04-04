import { useState } from "react";

interface Props {
  src?: string;
  alt?: string;
  onChange?: (file: File) => void;
}

const defaultProfilePicture = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path
  d="M12 0C5.37 0 0 5.37 0 12c0 1.86.42 3.61 1.17 5.18.29.61.63 1.19 1.02 1.74C4.36 21.99 7.95 24 12 24s7.64-2.01 9.81-5.08c.39-.55.73-1.13 1.02-1.74C23.58 15.61 24 13.86 24 12c0-6.63-5.37-12-12-12zm0 22c-3.32 0-6.28-1.63-8.1-4.14.79-.42 1.67-.77 2.6-1.06l.12.34C7.34 19.12 9.84 20 12 20s4.66-.88 5.38-2.86l.12-.34c.93.29 1.81.64 2.6 1.06C18.28 20.37 15.32 22 12 22zm-1.84-7.92c-.16-.41-.39-.82-.69-1.21-.58-.76-.9-1.74-.9-2.76C8.57 7.84 10.11 6 12 6s3.43 1.84 3.43 4.11c0 1.02-.32 2-.9 2.76-.3.39-.53.8-.69 1.21-.21.5-.32 1.02-.32 1.52v.21c0 .1.03.19.1.26.07.1.19.18.34.19.52.05 1.04.12 1.54.2-.31.86-1.79 1.54-3.5 1.54s-3.19-.68-3.5-1.54c.5-.08 1.02-.15 1.54-.2.15-.01.27-.09.34-.19.07-.07.1-.16.1-.26v-.21c0-.5-.11-1.02-.32-1.52zm10.95 2.02c-.9-.47-1.87-.88-2.92-1.2-.05-.02-.11-.03-.17-.05-.67-.2-1.36-.37-2.08-.5.05-.09.12-.18.18-.26.85-1.11 1.31-2.52 1.31-3.98C17.43 6.74 15 4 12 4s-5.43 2.74-5.43 6.11c0 1.46.47 2.87 1.31 3.98.07.08.13.17.18.26-.72.13-1.41.3-2.08.5-.06.02-.12.03-.17.05-1.05.32-2.02.73-2.92 1.2C2.31 14.85 2 13.46 2 12 2 6.49 6.49 2 12 2s10 4.49 10 10c0 1.46-.31 2.85-.89 4.1z"
/>
</svg>`;

const ProfilePicture: React.FC<Props> = ({
  src = defaultProfilePicture,
  alt = "Profile Picture",
  onChange = () => {},
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      onChange(file);
    }
  };

  return (
    <div className="relative">
      {/* {file ? (k */}
      <img
        src={
          file
            ? URL.createObjectURL(file)
            : `data:image/svg+xml;utf8,${encodeURIComponent(src)}`
        }
        alt={alt}
        className="w-24 h-24 rounded-full object-cover"
      />
      <label className="absolute bottom-0 w-24 h-24 rounded cursor-pointer">
        <span
          className="absolute bottom-0 rounded-full p-2 left-1/2 transform -translate-x-1/2 
        dark:text-white font-bold bg-white dark:bg-transparent"
        >
          change
        </span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default ProfilePicture;
