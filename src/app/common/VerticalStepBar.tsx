interface IVerticalStepBarProps {
  steps: any[]
}

const VerticalStepBar = ({ steps }: IVerticalStepBarProps) => {
  return (
    <ul className="steps">
      {steps.map((step, idx) => (
        <li key={idx} className="flex items-center">
          <span
            className={`
              after:z-2
              relative
              after:absolute
              after:right-0 after:top-0
              after:h-5 after:w-5
              after:translate-x-[60%]
              after:transform after:rounded-full
              after:border-2
              ${
                idx === 0
                  ? 'after:border-secondary-green after:bg-primary-green'
                  : 'after:border-white after:bg-white'
              }
            `}
          />
          <span
            className={`
              before:z-1
              relative
              py-3
              pl-6
              before:absolute
              before:left-0
              before:h-full
              before:border-l-4
              before:border-gray-300
              before:opacity-20
            `}
          >
            {step}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default VerticalStepBar

