import * as THREE from "three";

import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MyThree() {
  const refContainer = useRef(null);
  const scene = useRef(new THREE.Scene());
  const loader = new GLTFLoader();
  const glbFilePath = "./bonk.glb";

  function getFileSize(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // Extract the Content-Length header to get the total file size
          var contentLength = xhr.getResponseHeader("Content-Length");
          var totalSize = parseInt(contentLength) || 0;
          callback(totalSize);
        } else {
          console.error("Failed to retrieve file size:", xhr.status);
          callback(0);
        }
      }
    };

    xhr.send();
  }

  useEffect(() => {
    // === THREE.JS CODE START ===
    const currentScene = scene.current;
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
    });

    camera.position.set(-6, 6, -6); // Set the initial position
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look at the center of the scene

    getFileSize(glbFilePath, (totalSize) => {
      if (totalSize > 0) {
        loader.load(
          glbFilePath,
          (gltf) => {
            // Once the model is loaded, you can access its scene and add it to your scene
            const model = gltf.scene;
            model.traverse((child) => {
              if (child.isMesh) {
                // Create a wireframe geometry for each mesh
                const wireframeGeometry = new THREE.EdgesGeometry(
                  child.geometry
                );

                // Create the wireframe mesh
                const wireframeMesh = new THREE.LineSegments(
                  wireframeGeometry,
                  wireframeMaterial
                );

                // Add the wireframe mesh to the scene
                currentScene.add(wireframeMesh);
              }
            });
          },
          (xhr) => {
            // This callback is called while the model is being loaded
            const percentageLoaded = (xhr.loaded / totalSize) * 100;
            console.log(percentageLoaded.toFixed(2) + "% loaded");
          },
          (error) => {
            // This callback is called if there's an error loading the model
            console.error("Error loading GLB model:", error);
          }
        );
      } else {
        console.error("Total size is not available.");
      }
    });

    var animate = function () {
      requestAnimationFrame(animate);

      renderer.render(currentScene, camera);
    };
    animate();
    return () => {
      renderer.domElement.remove();
    };
  }, []);
  return (
    <div ref={refContainer}>
    </div>
  );
}

export default MyThree;
