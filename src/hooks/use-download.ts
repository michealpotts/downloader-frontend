import axios from "axios";

const useDownload = async (url: string) => {
  const res = await axios.get("http://localhost:3000/download", {
    params: { url },
    responseType: "blob"
  });
  console.log(res);
  const blob = new Blob([res.data]);

  const downloadUrl = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "downloaded_video_or_zip";
  a.click();

  window.URL.revokeObjectURL(downloadUrl);
};

export { useDownload };
