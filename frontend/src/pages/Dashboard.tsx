import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
