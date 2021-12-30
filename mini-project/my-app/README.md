### -This repo is cloned from https://github.com/paulnguyen-mn/redux-photo-app




1. Setup ReactJS App via Create React App
Link: https://create-react-app.dev/docs/getting-started/

2. Add SCSS support
npm i --save-dev node-sass
3. Add react router
npm i --save react-router-dom
4. Add UI lib
npm i --save reactstrap

### Organize Folders 
src
|__ assets
|  |__ images
|  |__ styles (global styles) 
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js



### routing (lazy load components)

// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
Custom Field
Cầu nối giữa UI control và Formik.
UI control là một controlled component với props:
name: tên xác định control
value: giá trị của control
onChange: trigger hàm này với giá trị mới khi có thay đổi
onBlur: xác định khi nào thì control này bị touched
function InputField(props) {
  const {
    field,
    type, label, placeholder, disabled,
  } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
Random Photo control
RandomPhoto Props

name
imageUrl
onImageUrlChange
onRandomButtonBlur
RandomPhotoField

Formik

Yup


### Redux toolkit
1. Setup todo slice (createSlice)
2. 