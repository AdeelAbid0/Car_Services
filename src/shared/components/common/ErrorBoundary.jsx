import React from "react";
import { Result } from "antd";
import { ROUTES } from "../../../constants/routes";
import Button from "../ui/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = ROUTES.HOME;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="max-w-[50%] w-full mx-4">
            <Result
              status="500"
              title="Something went wrong"
              subTitle="An unexpected error occurred. Please try refreshing the page or contact support if the problem persists."
              extra={[
                <Button
                  type="primary"
                  label="Refresh Page"
                  onClick={this.handleReload}
                />,
                <Button label="Go to Home" onClick={this.handleGoHome} />
              ]}
            />

            {process.env.NODE_ENV === "development" && (
              <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg">
                <h3 className="text-lg font-semibold text-danger mb-2">
                  Error Details (Development Mode)
                </h3>
                <details className="text-sm">
                  <summary className="cursor-pointer text-danger hover:text-danger/50 mb-2">
                    Click to view error details
                  </summary>
                  <div className="mt-2 space-y-2">
                    <div>
                      <strong className="text-danger">Error:</strong>
                      <pre className="mt-1 p-2 bg-danger/10 rounded text-xs overflow-auto">
                        {this.state.error && this.state.error.toString()}
                      </pre>
                    </div>
                    <div>
                      <strong className="text-danger">Stack Trace:</strong>
                      <pre className="mt-1 p-2 bg-danger/10 rounded text-xs overflow-auto">
                        {this.state.errorInfo &&
                          this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  </div>
                </details>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
