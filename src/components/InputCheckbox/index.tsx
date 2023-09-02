import classNames from "classnames"
import { useState } from "react"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [check, setCheck] = useState(checked);
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": check,
          "RampInputCheckbox--label-disabled": disabled
        })}
        onClick={() => {
          setCheck(!check);
        }}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          onChange(!checked)
        }}
      />
    </div>
  )
}
