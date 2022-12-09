import classes from './error-alert.module.css';

type EventContentProps = {
  children: React.ReactNode;
};

function ErrorAlert(props: EventContentProps) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
