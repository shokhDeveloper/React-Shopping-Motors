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

export const Input = ({ params, password, text, register, errors, value, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            disabled={disabled ? disabled: false}
            {...register(params)}   
            error={errors[params] ? true: false}
            defaultValue={"Password"}
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
            <OutlinedInput   defaultValue={value ? value : null}
            error={errors[params] ? true: false}
            disabled={disabled ? disabled: false}
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
