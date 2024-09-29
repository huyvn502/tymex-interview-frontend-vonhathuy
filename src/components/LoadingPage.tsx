import { Spin } from "antd";

interface IProps {
  className?: string;
}

function LoadingPage(props: IProps) {
  const { className } = props;

  return (
    <div className={className}>
      <Spin spinning size="large" />
    </div>
  );
}

export default LoadingPage;
