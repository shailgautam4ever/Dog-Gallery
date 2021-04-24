import React, { useState, useEffect } from "react";
import { Button, List, Modal } from "antd";
import { render } from "@testing-library/react";
import Loading from "./Loading";
import { SyncOutlined } from "@ant-design/icons";

function App() {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentBreed, setCurrentBreed] = useState("");
  const [breedImage, setBreedImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        setBreeds(breeds);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchBreedImage();
  }, [currentBreed]);

  const handleOnBreedClick = (breed) => {
    setCurrentBreed(breed);
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setBreedImage("");
    setCurrentBreed("");
  };

  const fetchBreedImage = () => {
    if (!currentBreed) return;
    setLoading(true);
    fetch("https://dog.ceo/api/breed/" + currentBreed + "/images/random")
      .then((res) => res.json())
      .then((data) => {
        setBreedImage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Hi from App</p>
      {/* <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <p>You are Typing: {input}</p> */}
      {/* <div>
        {breeds.map((breed) => (
          <p>{breed}</p>
        ))}
      </div> */}
      <div style={{ width: "90%", margin: "10px" }}>
        <List
          bordered
          size="small"
          dataSource={breeds}
          renderItem={(item) => (
            <List.Item onClick={() => handleOnBreedClick(item)}>
              {item}
            </List.Item>
          )}
        />
      </div>

      <Modal
        title={`${currentBreed} - Breed`}
        visible={isModalVisible}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <div>
          {breedImage ? (
            <img width="300px" src={breedImage}></img>
          ) : (
            <Loading />
          )}
          <Button
            type="primary"
            loading={loading}
            icon={<SyncOutlined />}
            onClick={fetchBreedImage}
          >
            Refresh
          </Button>
        </div>
      </Modal>
    </div>
  );
}
export default App;
