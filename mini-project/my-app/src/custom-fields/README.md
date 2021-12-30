### Custom Field
- Cầu nối giua UI control và Formik
- UI control là một controlled component với props:
  - name: tên xác định control 
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: Xác định khi nào thì control này bị touched  

### Random Photo Control 
Random photo 
Props 
  - name  
  - imageUrl  
  - onImageUrlChange 
  - onRandomButtonBlur


                        randomPhotoField
randomPhotoComponent    <------------->       Formik