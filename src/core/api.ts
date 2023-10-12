const baseUrl = import.meta.env.VITE_BACKEND_API_URL;
export default {
    postImage:async (file:File)=>{
       
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch(`${baseUrl}/upload`, {
          method: 'POST',
          body: formData, 
        });

        const text = await response.text();
        const objResponse = JSON.parse(text);

        return objResponse

    },
    getImage:async (id:string)=>{
       
      
      const response = await fetch(`${baseUrl}/image/${id}`, {
        method: 'get',
      });
      const text = await response.text();
      const objResponse = await JSON.parse(text);

      return `data:${objResponse.contentType};base64,${objResponse.img}`;

  },
}