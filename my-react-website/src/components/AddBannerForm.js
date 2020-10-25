import React, { useState } from 'react';
import axios from 'axios';

const AddBannerForm = () => {
  const [file, setFile] = useState({}); 
  const [banner, setBannerInfo] = useState({});
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerText, setBannerText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');

  const onFileUpload = async e => {   
    e.preventDefault();
    const formData = new FormData();  
    formData.append("file", file);
    formData.append("bannerTitle", bannerTitle);
    formData.append("bannerText", bannerText);
    formData.append("buttonText", buttonText);
    formData.append("buttonUrl", buttonUrl);
    
    try {
      const res = await axios.post("/api/banners", formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      });

      const { fileName, filePath, bannerTitle, bannerText, buttonText, buttonUrl } = res.data;

      setBannerInfo({ fileName, filePath, bannerTitle, bannerText, buttonText, buttonUrl });
      setFile({});
      setBannerTitle('');
      setBannerText('');
      setButtonText('');
      setButtonUrl('');

    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
     
  };

  return ( 
    <>
      <div className="add-comment-form"> 
        <h3> 
          Make your own banner!
        </h3> 
        <form onSubmit={onFileUpload}>
          <label>
              Banner background image:
              <input type="file" onChange={(event) => setFile(event.target.files[0])} /> 
          </label>
          <label>
              Banner title:
              <input type="text" onChange={(event) => setBannerTitle(event.target.value)} />
          </label>
          <label>
              Banner text:
              <textarea rows="4" cols="50" onChange={(event) => setBannerText(event.target.value)} />
          </label>
          <label>
              Banner button text:
              <input type="text" onChange={(event) => setButtonText(event.target.value)} />
          </label>
          <label>
              Banner button URL:
              <input type="text" onChange={(event) => setButtonUrl(event.target.value)} />
          </label>
          <button type='submit'>Add Banner</button>
        </form>
      </div>
      { banner ? <div>
          <h3>Your new banner:</h3>
          <div className="banner">
            <img src={banner.filePath} alt={banner.fileName} />
            <div className="centered">
              <h4>{banner.bannerTitle}</h4>
              <p>{banner.bannerText}</p>
                {banner.buttonText && banner.buttonUrl &&
                <a href={banner.buttonUrl}>
                    <p className="link-button">{banner.buttonText}</p>
                </a>}
                {!banner.buttonText && !banner.buttonUrl && null}
                {banner.buttonText && !banner.buttonUrl &&
                <a href="/">
                    <p className="link-button">{banner.buttonText}</p>
                </a>}
                {!banner.buttonText && banner.buttonUrl && 
                <a href={banner.buttonUrl}>
                    <p className="link-button">{'Click here'}</p>
                </a>}
            </div>
          </div>
        </div> : null }
    </>
  )
};
export default AddBannerForm;