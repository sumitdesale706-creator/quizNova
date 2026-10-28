import SessionInfo from "../ui/components/waitingRoom/SessionInfo";
import WaitingRoomCard from "../ui/components/waitingRoom/WaitingRoomCard";
import WaitingFooter from "../ui/components/waitingRoom/WaitingFooter";

const WaitingRoom = () => {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <SessionInfo />
      <WaitingRoomCard />
      <WaitingFooter />
    </div>
  );
};

export default WaitingRoom;
