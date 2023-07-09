import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LabelText } from "../../Settings";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const Input = ({ params, password, text, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log(errors, params)
  return (
    <>
      {password ? (
        <LabelText variant={errors[params] ? "error": "default"}>
          {errors[params] ? <p>{errors[params].message}</p>: null}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel  error={errors[params] ? true: false} htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
            {...register(params)}   
            error={errors[params] ? true: false}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </LabelText>
      ) : (
        <LabelText variant={errors[params] ? "error": "default"}>
          
          {errors[params] ? <p>{errors[params].message}</p>: null}
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <InputLabel error={errors[params] ? true: false}  htmlFor={`outlined-adornment-${params}`}>
              {text}
            </InputLabel>
            <OutlinedInput
            error={errors[params] ? true: false}
            {...register(params)}
              id={`outlined-adornment-${params}`}
              type="text"
              label={`${params}`}
            />
          </FormControl>
        </LabelText>
      )}
    </>
  );
};
