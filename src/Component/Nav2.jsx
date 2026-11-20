import React from 'react'
import { useState, useContext } from 'react'
import SavedContext from '../Context/SavedContext';
import { NavLink } from "react-router-dom"; 
 
import img13 from "../assets/Features/Hutlogo.png"

const Nav2 = () => {
const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false); 
  const categoryIcons = {
  Cakes: (
    <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
  <path fill="currentColor" d="M38.026 30.765a36 36 0 0 0 2.005-.265v-4.701c-1.024.489-2.092.791-3.154 1.025c-2.693.563-5.432.629-8.146.345c-1.368-.173-2.685-.399-4.049-.884q-.405-.152-.805-.344v4.226c4.682.767 9.443 1.092 14.149.598" />
  <path fill="currentColor" d="M56.299 41.987V24.841c0-1.988-1.366-3.839-3.703-5.407v-7.509c0-.735-.583-1.343-1.342-1.458c.557-.236.951-.723.951-1.309c0-.813-1.652-3.437-1.652-3.437s-1.654 2.623-1.654 3.437c0 .578.385 1.061.931 1.301c-.802.08-1.431.703-1.431 1.466v5.385a35 35 0 0 0-4.49-1.377a1.6 1.6 0 0 0 .123-.596c0-.983-2-4.154-2-4.154s-1.83 2.904-1.984 4.014c-1.959-.289-4.044-.457-6.195-.525V7.467c0-.661-.512-1.213-1.188-1.334c.461-.215.783-.631.783-1.126C33.447 4.295 32 2 32 2s-1.447 2.295-1.447 3.007c0 .489.314.901.766 1.118c-.713.092-1.266.655-1.266 1.342v7.206c-2.103.07-4.142.236-6.06.518c-.188-1.135-1.981-3.979-1.981-3.979s-2 3.17-2 4.154c0 .197.045.383.111.56a35 35 0 0 0-4.633 1.429V11.94c0-.734-.584-1.342-1.344-1.457c.557-.236.953-.724.953-1.31c0-.813-1.654-3.437-1.654-3.437s-1.654 2.623-1.654 3.437c0 .578.386 1.061.932 1.301c-.803.081-1.432.704-1.432 1.466v7.574c-2.267 1.552-3.592 3.374-3.592 5.328V41.99C4.117 44.066 2 46.62 2 49.383C2 56.352 15.432 62 32 62s30-5.648 30-12.617c0-2.764-2.118-5.318-5.701-7.396M49.725 9.943c0-.407.828-1.719.828-1.719s.828 1.312.828 1.719a.68.68 0 0 1-.249.512c-.046-.004-.091-.013-.138-.013h-.992l-.037.003a.67.67 0 0 1-.24-.502m-.327 1.982c0-.262.276-.482.604-.482h.992c.326 0 .602.221.602.482v10.797a.42.42 0 0 1-.116.284l-.368.188a1 1 0 0 1-.117.011h-.992c-.327 0-.604-.222-.604-.483V11.925zm-7.367 2.284s1.002 1.585 1.002 2.077c0 .491-.449.89-1.002.89s-1-.398-1-.89s1-2.077 1-2.077M31.277 5.693c0-.355.723-1.502.723-1.502s.725 1.146.725 1.502a.6.6 0 0 1-.197.427c-.048-.005-.094-.014-.143-.014h-.867l-.052.005a.58.58 0 0 1-.189-.418m-.224 1.774c0-.195.213-.36.465-.36h.867c.253 0 .467.165.467.36v9.448a.3.3 0 0 1-.078.195l-.305.157l-.084.006h-.867c-.252 0-.465-.164-.465-.358zm-9.041 6.769s1 1.586 1 2.078c0 .49-.447.89-1 .89s-1-.399-1-.89c0-.492 1-2.078 1-2.078m-9.393-4.28c0-.405.826-1.717.826-1.717s.828 1.312.828 1.717a.68.68 0 0 1-.25.514c-.046-.004-.09-.013-.137-.013h-.992l-.035.003a.68.68 0 0 1-.24-.504m-.328 1.982c0-.261.276-.481.604-.481h.992c.327 0 .604.221.604.481v10.798a.42.42 0 0 1-.117.282l-.368.189a1 1 0 0 1-.118.011h-.992c-.327 0-.604-.221-.604-.482zm-1.104 11.643c.033-.17.099-.325.158-.483c.066.242.196.459.373.638c-.078.571.062 1.15.367 1.651c.649 1.043 1.76 1.773 2.892 2.353c1.585.789 3.291 1.292 5.035 1.688V19.249c0-.265.127-.497.313-.688c-.288.056-.578.098-.864.162c-1.345.306-2.713.711-3.971 1.296v-.529l.044-.021c1.228-.549 2.509-.952 3.808-1.26a41.6 41.6 0 0 1 7.928-1.046c.935-.035 1.872-.03 2.81-.007c.097.492.479.886.98 1.041a41 41 0 0 0-3.778-.213a43 43 0 0 0-4.439.208c.589.114 1.035.532 1.035 1.057v1.832l.053-.026c.686-.298 1.365-.47 2.051-.6c1.369-.252 2.74-.307 4.105-.229c1.372.095 2.712.285 4.052.856c.33.15.659.333.964.609c.289.253.628.744.492 1.306c-.145.524-.506.79-.814.994a4 4 0 0 1-1.002.44c-1.357.393-2.73.389-4.073.218c-.673-.107-1.329-.231-1.969-.54c-.297-.162-.649-.359-.753-.777c-.057-.461.34-.701.616-.847l.072.131c-.264.16-.526.422-.45.664s.375.41.653.527c.573.229 1.245.312 1.88.36c1.285.069 2.612-.053 3.784-.456c.526-.169 1.18-.601 1.206-.9c.082-.214-.438-.64-.99-.827c-1.125-.414-2.458-.54-3.719-.587c-1.276-.029-2.566.069-3.794.34c-.609.136-1.213.318-1.734.567a4 4 0 0 0-.63.375v1.517c.372.258.839.472 1.323.642c1.137.389 2.449.607 3.705.741c2.545.269 5.159.183 7.659-.286c1.229-.242 2.446-.587 3.467-1.171V20.52c-.402-.24-.827-.46-1.276-.648c-1.157-.485-2.412-.806-3.689-1.075a43 43 0 0 0-3.36-.522h.68q.188 0 .37-.045l.544-.264l.104-.071c.153-.138.268-.301.344-.479c.514.063 1.027.125 1.539.213c1.319.231 2.652.521 3.958 1.015q.424.161.841.361c.126-.501.638-.887 1.28-.887h1.199c.736 0 1.334.496 1.334 1.106V29.63c3.086-.913 6.008-2.354 8.468-4.521l.104.107c-1.798 1.965-4.084 3.494-6.544 4.568c-.665.287-1.342.544-2.027.779v.837c0 .304-.148.581-.389.78l-.6.288a1.7 1.7 0 0 1-.346.039h-1.199c-.653 0-1.172-.397-1.287-.913q-.95.191-1.908.324c-4.763.653-9.605.425-14.306-.44a1.03 1.03 0 0 1-.374.729l-.6.287c-.109.024-.227.04-.346.04h-1.199c-.738 0-1.334-.496-1.334-1.107v-.821c-1.87-.511-3.719-1.16-5.432-2.131c-1.165-.685-2.331-1.519-3.032-2.784c-.342-.628-.511-1.39-.362-2.11m43.112 23.756c0 3.881-9.536 8.221-22.299 8.221s-22.301-4.34-22.301-8.221v-3.974c.984-.053 1.77-.766 1.77-1.645v-3.855c0-1.214 1.119-2.198 2.5-2.198s2.502.984 2.502 2.198v4.756c0 1.412 1.303 2.558 2.908 2.558c1.607 0 2.91-1.146 2.91-2.558V37.76c0-1.271 1.172-2.3 2.617-2.3c1.447 0 2.619 1.029 2.619 2.3v3.098c0 .707.65 1.279 1.455 1.279c.803 0 1.453-.572 1.453-1.279V38.4c0-.918.848-1.662 1.893-1.662c1.043 0 1.889.744 1.889 1.662v4.22c0 1.412 1.305 2.558 2.91 2.558c1.607 0 2.91-1.146 2.91-2.558v-4.73c0-1.2 1.107-2.174 2.473-2.174s2.473.974 2.473 2.174v3.452c0 .706.65 1.278 1.455 1.278c.803 0 1.455-.572 1.455-1.278v-2.417c0-.629.578-1.139 1.293-1.139c.717 0 1.297.51 1.297 1.139v3.695c0 1.412 1.301 2.558 2.908 2.558c.32 0 .622-.057.91-.141z" />
      </svg>
  ),
  Cupcakes: (
     <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <g fill="none">
    <path fill="currentColor" d="M15 4h-1a2 2 0 1 1-4 0H9a3 3 0 0 0-3 3l.003.125A4 4 0 0 0 3 11v2h18v-2a4 4 0 0 0-3.004-3.875L18 7a3 3 0 0 0-3-3" opacity=".15" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22v-9m2-9h1a3 3 0 0 1 3 3l-.004.125A4 4 0 0 1 21 11v2m-5.5 9l1.5-9m4 0a1 1 0 0 1 .919 1.394l-2.74 6.394A2 2 0 0 1 17.339 22H6.66a2 2 0 0 1-1.838-1.212l-2.74-6.394A1 1 0 0 1 3 13zM3 13v-2a4 4 0 0 1 3.003-3.875L6 7a3 3 0 0 1 3-3h1M8.5 22L7 13" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
  </g>
               </svg>
  ),
  Cookies: (
     <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9c0-.5-.04-1-.13-1.5C20.6 10 20 10 20 10h-2V9c0-1-1-1-1-1h-2V7c0-1-1-1-1-1h-1V4c0-1-1-1-1-1M9.5 6A1.5 1.5 0 0 1 11 7.5A1.5 1.5 0 0 1 9.5 9A1.5 1.5 0 0 1 8 7.5A1.5 1.5 0 0 1 9.5 6m-3 4A1.5 1.5 0 0 1 8 11.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 5 11.5A1.5 1.5 0 0 1 6.5 10m5 1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m5 2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M11 16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 11 19a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 16" />
               </svg>
  ),
  Macarons: (
   <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none" />
  <path fill="currentColor" fill-rule="evenodd" d="M2.25 7.499V15.5q.002 1.963 3.115 3.173Q8.132 19.749 12 19.749t6.635-1.076q3.113-1.21 3.115-3.172V7.499q.002-1.962-3.113-3.174Q15.87 3.249 12 3.249T5.363 4.325Q2.249 5.537 2.25 7.499M9.5 6.75h.01q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H9.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T8.75 7.5t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014m5.01 0q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-.01q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014zM3.75 11.5V9.864q.661.44 1.613.811Q8.13 11.751 12 11.751t6.637-1.076q.952-.371 1.613-.811v1.635q-.001.937-2.159 1.776q-2.505.974-6.091.974t-6.091-.974Q3.751 12.436 3.75 11.5m14.885 3.173q.953-.371 1.615-.812v1.638q-.001.937-2.159 1.776q-2.505.974-6.091.974t-6.091-.974Q3.751 16.436 3.75 15.5v-1.639q.662.441 1.615.812Q8.132 15.749 12 15.749t6.635-1.076" />
</svg>
  ),
   Pastries: (
   <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
  <path d="M0 0h64v64H0z" fill="none" />
  <g fill="currentColor" fill-rule="evenodd">
    <path d="M47.384 44.207c4.841-.655 8.772-4.719 8.776-9.125l-17.685 2.409c.093 4.382 4.079 7.366 8.909 6.716M29.634 38.7c-4.853.66-8.625 4.729-8.441 9.042l17.409-2.35c-.093-4.34-4.111-7.354-8.968-6.692" />
    <path d="M43.354 13.903a9 9 0 0 0-.162-.812l2.341.042l-2.765-3.192l1.924-2.669l-4.4-.462l-.506-4.037l-2.906 1.764L33.401 2l-.186 2.09a9.6 9.6 0 0 0-1.803-.187c-2.064 0-3.94.72-5.423 2.079c-3.274 3.005-4.437 7.943-4.438 11.26c0 .696.05 1.488.194 2.274C10.936 24.307 2 30.194 2 30.194V62l60-7.77V21.91c0-3.509-12.229-7.149-18.646-8.007M27.348 7.439c1.181-1.083 2.593-1.553 4.065-1.553c2.344 0 4.84 1.189 6.798 2.983c3.177 2.916 4.625 7.179 1.565 9.991c-2.615 2.4-7.181 3.457-10.679 3.457c-2.035 0-3.71-.358-4.429-1.018c-1.973-1.811-1.477-10.045 2.68-13.86m30.034 45.389L4 59.74v-6.95l53.388-7.036zm.007-9.075L4 50.789v-5.994c1.376 2.89 4.714 4.633 8.488 4.123c4.783-.646 8.516-4.663 8.327-9.017L4 42.191v-1.367l53.396-6.841zm.007-11.77L4 38.824v-6.892l53.4-7.023z" />
    <path d="m28.448 17.74l.712.662l.712-.662l-.712-.661zm11.645-4.057l-.71-.662l-.712.662l.712.661zm-3.402.661l-.712-.661l-.71.661l.71.662zm-3.991 0l.71-.661l-.71-.662l-.713.662zm4.476-3.353l-.711-.661l-.712.661l.712.662zm-2.078-2.838l-.712-.662l-.711.662l.711.662zm-3.111 3.11l.712-.662l-.712-.662l-.711.662zm-2.952 2.875l.711-.661l-.711-.663l-.713.663zm3.127 3.191l.711.661l.713-.661l-.713-.662zm6.676.105l-.712-.663l-.712.663l.712.661zm-3.569 3.322l.71-.662l-.71-.662l-.711.662zm-5.397 0l.712.661l.712-.661l-.712-.662zm-4.436-1.324l.712.662l.711-.662l-.711-.661zm.937-3.427l-.711-.661l-.71.661l.71.662zm2.19-6.528l-.713-.662l-.712.662l.712.662zm-1.704 3.03l-.711-.661l-.711.661l.711.662zM31.5 7.306l-.712-.661l-.711.661l.711.662z" />
  </g>
</svg>
  ),
    Halloween: (
   <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 640 640">
  <path d="M0 0h640v640H0z" fill="none" />
  <path fill="currentColor" d="M433.3 33c11.9-3.5 24.4 2.7 29 13.9l.8 2.3l40 136c2.5 8.4.1 17.5-6.1 23.7L432.9 273l76.4-20.8l19.9-59.8l.9-2.3c5-11.1 17.7-16.8 29.5-12.9s18.5 16.1 15.8 28l-.7 2.4l-24 72c-2.5 7.6-8.7 13.4-16.5 15.6L443.1 320l91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72l.7 2.4c2.7 11.9-4.1 24.1-15.8 28c-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3l-19.9-59.8l-76.4-20.8l64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144l-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4S414.3 600 416.4 588l.5-2.4l36.2-130.5l-37.2-37.2C415 470 372.4 512 320 512s-95-42-96-94.1l-37 37l36 122.3l.6 2.4c2.2 11.9-4.9 23.9-16.8 27.4s-24.4-2.7-29-13.9l-.8-2.3l-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1l-76.4 20.8l-19.9 59.8l-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4l24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8l-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72l-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28S105 178.9 110 190l.9 2.3l19.9 59.8l76.4 20.8l-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136l.8-2.3c4.6-11.3 17.1-17.4 29-13.9s19 15.5 16.8 27.4l-.6 2.4L187 185l53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1l-36-122.3l-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z" />
</svg>
  ),
  Christmass: (
    <svg className="text-2xl text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
	<path d="M0 0h48v48H0z" fill="none" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.4">
		<path d="M8.5 29.6c8-.7 16-.7 24 .5c.3 2.4.3 4.9 0 7.3c-7.9.7-15.8.5-23.8-.3c-.3-2.5-.4-5-.2-7.5" />
		<path d="M10.8 30c.3-.6.4-1.2.2-1.9c.4-.9.6-1.8.6-2.8c.5-.9.8-1.9 1-2.9c.4-.8.7-1.6.9-2.5q.9-1.05 1.5-2.4c.6-.5 1.2-1.2 1.6-2c1.1-.7 2.2-1.5 3.1-2.4c1.2-.5 2.3-1.1 3.4-1.9c1 .1 2-.2 2.9-.5c1.2.3 2.4.5 3.6.5c.7.4 1.5.7 2.3.7c.6.8 1.3 1.5 2.1 2c.4.9.9 1.8 1.6 2.5c0 .8.2 1.6.6 2.3" />
		<path d="M36.3 18.8c1.7-.2 3.2 1 3.2 2.9c.1 1.9-1.2 3.3-3.1 3.1c-1.6.1-2.8-1.3-2.9-3.2c.3-1.8 1.6-3.2 3.4-2.8ZM29.5 30c.1-.9 0-1.7-.2-2.6c0-.9-.1-1.7-.4-2.6c-.3-1.5-.7-2.9-1.3-4.3" />
	</g>
</svg>

  )

};

 const [menuOpen, setMenuOpen] = useState(false)
 const [categoriesOpen, setCategoriesOpen] = useState(false);
 const {user, signOut} = useContext(SavedContext)

  return (                                                        
    <div>
      <nav className=" md:top-60 left-0 bg-[#A7B48F] w-full h-30 md:h-16 shadow-md z-50">
     <div className="mx-auto flex h-full items-center justify-between px-6 shadow-md md:justify-center md:gap-20"> 

        

 <div className="md:hidden flex items-center">
            <img src={img13} alt="logo" className="w-70 h-30 object-cover"/>
    </div>
          
 <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl md:hidden text-[#8B4513] hover:text-[#F4C7C7] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-7 2a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
            </svg>
          </button>

          <div className=" hidden flex-row flex-nowrap items-center justify-center gap-15 md:flex">
            <NavLink to="/" className={({isActive}) => 
            isActive ? "underline decoration-[#74815F] underline-offset-4" : "hover:underline decoration-[#74815F]"}>
              <h1 className="text-lg text-[#8B4513] hover:text-[#F4C7C7]">Home</h1> 
            </NavLink>

            <NavLink to="/gift" className={({isActive}) => 
            isActive ? "underline decoration-[#74815F] underline-offset-4" : "hover:underline decoration-[#74815F]"}>
              <h1 className="text-lg text-[#8B4513] hover:text-[#F4C7C7]">Gifts</h1>
            </NavLink>
          <NavLink to="/about" className={({isActive}) => 
          isActive ? "underline decoration-[#74815F] underlie-offser-4" : "hover:underline decoration-[#74815F]"}>
            <h1 className="text-lg text-[#8B4513] hover:text-[#F4C7C7]">About</h1>
          </NavLink>
         <NavLink to="/contact" className={({isActive}) => 
        isActive ? "underline decoration-[#74815F] underline-offset-4" : "hover:underline decoration-[#74815F]"}>
           <h1 className="text-lg text-[#8B4513] hover:text-[#F4C7C7]">Contact</h1>
         </NavLink>
         <NavLink to="/menu" className={({isActive}) => 
        isActive ? "underline decoration-[#74815F] underline-offset-4" : "hover:underline decoration-[#74815F]"}>
           <h1 className="text-lg text-[#8B4513] hover:text-[#F4C7C7]">Menu</h1>
         </NavLink>

   <div className="relative">
  <button
  type="button"
  onClick={() => setCategoriesOpen(!categoriesOpen)}
  className="flex items-center gap-2 text-lg text-[#8B4513]"
>
  Shop
  <i
    aria-hidden="true"
    className={`fa-solid fa-chevron-down transition-transform duration-200 ${
      categoriesOpen ? "rotate-180" : ""
    }`}
  />
</button>

  {categoriesOpen && (
    <div className="absolute left-0 top-full z-50 mt-3 w-56 rounded-xl border border-[#eadbc9] bg-[#FDF4EA] p-3 shadow-lg ">
      {[
        ["Cakes", "/cake"],
        ["Cupcakes", "/cupcake"],
        ["Cookies", "/cookies"],
        ["Macarons", "/macarons"],
        ["Pastries", "/pastries"],
        ["Halloween", "/halloween"],
        ["Christmass", "/christmass"],
         ["More Desserts", "/dessert"],
      ].map(([label, path]) => (
        <NavLink
          key={path}
          to={path}
          onClick={() => setCategoriesOpen(false)}
          className="block rounded-lg px-3 py-2 text-[#8B4513] hover:bg-[#A7B48F]/30"
        >
           <span className="flex items-center gap-2">
    {categoryIcons[label]}
    <span>{label}</span>
  </span>
        </NavLink>
      ))}
    </div>
  )}
</div>
   </div>

  <div className="hidden flex-nowrap items-center justify-center gap-10 md:flex"> 

  {/* <div className="hidden flex-nowrap items-center justify-end gap-5 md:ml-auto md:flex"> */}

<NavLink to="/save">
  {({ isActive }) => (
    <i
      className={`fa-heart fa-solid text-lg ${
        isActive
          ? "fa-solid text-[#F4C7C7]"
          : "fa-regular text-[#667653] hover:text-[#F4C7C7]"
      }`}
    />
  )}
</NavLink>

<NavLink
      to="/cart"
      className={({ isActive }) =>
        `text-2xl transition ${
          isActive
            ? "text-[#F4C7C7]"
            : "text-[#667653] hover:text-[#F4C7C7]"
        }`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        aria-label="Cart"
      >
        <path
          fill="currentColor"
          d="M164.803 436.846q25.188 8.773 59.822 11.544V491h-59.822zM292.843 491h59.822v-54.574q-26.763 8.826-59.822 11.702zM255.606 21c-27.066 0-49.011 28.547-49.011 63.757c0 35.211 21.945 63.758 49.011 63.758s49.012-28.547 49.012-63.758S282.673 21 255.606 21m220.68 286.337c0-89.733-68.092-165.906-160.71-189.205a83.2 83.2 0 0 1-11.997 21.945c-12.32 16.036-29.806 25.188-47.962 25.188s-35.683-9.194-47.962-25.188a83.2 83.2 0 0 1-11.933-21.777c-92.283 23.498-160.008 99.524-160.008 189.037H68.25a144.2 144.2 0 0 1 15.931-66.193a148.6 148.6 0 0 0-3.232 30.803c0 88.893 30.635 160.92 175.068 160.92c153.332 0 175.068-72.08 175.068-160.972a148 148 0 0 0-3.233-30.761a144.2 144.2 0 0 1 15.9 66.203h32.535z"
        />
      </svg>
</NavLink>


            {user ? (
           <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-amber-50">
                {user.name}
              </span>

          <button
            type="button"
            onClick={signOut}
            className="text-lg text-[#667653] bg-amber-50 px-2 py-1 rounded-xl hover:text-[#e99e9e] shadow hover:shadow-amber-50"
          >
            Sign out
          </button>
  </div>
            ): (
          //   <NavLink to="/user" className={({isActive}) => 
          // isActive ? "underline decoration-[#74815F] underline-offset-4" : "hover:underline decoration-[#74815F]"}>
          //   <h1 className="text-lg text-[#667653] hover:text-[#F4C7C7]"><i className="fa-solid fa-user"></i></h1>
          //  </NavLink>

          <NavLink to="/user">
  {({ isActive }) => (
    <i
      className={`fa-user fa-solid text-lg ${
        isActive
          ? "fa-solid text-[#F4C7C7]"
          : "fa-regular text-[#667653] hover:text-[#F4C7C7]"
      }`}
    />
  )}
</NavLink>

            ) }
            
          </div>
        </div>

        {menuOpen && (
        
          <div  className="absolute left-0  z-10 w-full bg-[#FDF4EA] p-8 shadow-md md:hidden flex flex-col space-y-4">
            <NavLink  to="/" >
               <h1 onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">Home</h1>
            </NavLink>

         <NavLink to="/menu">
           <h1 onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">Menu</h1>
         </NavLink>
          
 <div>
  <button
    type="button"
    onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
    aria-expanded={mobileCategoriesOpen}
    className="flex w-full items-center justify-between text-left text-lg text-[#8B4513]"
  >
    Categories
    <i
      aria-hidden="true"
      className={`fa-solid fa-chevron-down transition-transform ${
        mobileCategoriesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {mobileCategoriesOpen && (
    <div className="mt-3 flex flex-col space-y-3 border-l-2 border-[#A7B48F] pl-4">
      {[
        ["Cakes", "/cake"],
        ["Cupcakes", "/cupcake"],
        ["Cookies", "/cookies"],
        ["Macarons", "/macarons"],
        ["Pastries", "/pastries"],
        ["Desserts", "/dessert"],
        ["Halloween treats", "/halloween"],
        ["Christmas treats", "/christmass"],
      ].map(([label, path]) => (
        <NavLink
          key={path}
          to={path}
          onClick={() => {
            setMenuOpen(false);
            setMobileCategoriesOpen(false);
          }}
          className="text-[#8B4513] hover:text-[#A4AD8D]"
        >
          {label}
        </NavLink>
      ))}
    </div>
  )}
</div> 

            <NavLink to="/gift">
              <h1 onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">Gift</h1>
            </NavLink>
          
          <NavLink  to="/about">
             <h1 onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">About</h1>
          </NavLink>
         
          <NavLink  to="/contact">
            <h1 onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">Contact</h1>
          </NavLink>
          
          <NavLink  to="/save">
            <h1 onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">Wishlist</h1>
          </NavLink>
          
          <NavLink to="/cart">
            <h1  onClick={() => setMenuOpen(false)} className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">Cart</h1>
          </NavLink>
          
          {user ? (
  <button
    type="button"
    onClick={() => {
      signOut();
      setMenuOpen(false);
    }}
    className="text-left text-lg text-[#8B4513] hover:text-[#A4AD8D]"
  >
    Sign out
  </button>
) : (
  <NavLink to="/user" onClick={() => setMenuOpen(false)}>
    <h1 className="text-lg text-[#8B4513] hover:text-[#A4AD8D]">
      Account
    </h1>
  </NavLink>
)}
          
          </div>
           
        )}
      </nav>
    </div>
  )
}

export default Nav2
