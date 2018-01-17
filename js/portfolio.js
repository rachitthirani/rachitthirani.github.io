
var tab =angular.module('TabsApp', []);
tab.controller('TabsCtrl', ['$scope', function ($scope,$http) {
    $scope.tabs = [
    	{
            name: "About Me",
            index:1,
            url: "html/aboutme.html"
        }, 
        {
            name: "Experience",
            index:2,
            url: "html/experience.html"
        },
        {   
            name:"Skills",
            index:3,
            url :"html/skills.html"
        }, 
        {	
			name:"Projects",
			index:3,
			url :"html/projects.html"
		},

		{	
			name:"Contact Me",
			index:4,
			url :"html/contactme.html"
		}
    ];


    $scope.currentTab = 'html/home.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
tab.controller('projectsCtrl', ['$scope', function ($scope,$http)
{
        $scope.projects = [
        {cate_name:"Data Science",
        index:1,
        pro:[{
                name: "IMDb Rating and Gross Income Prediction",
                desc: "Developed a tool for cleaning of IMDb’s data and prediction of rating for upcoming movies based on the attributes like actor’s rating, director’s rating, genre using machine learning techniques such as Decision tree, K means Clustering and Neural Networks.",
                tech : "R,Decision Tree, Kmeans, CLustering"
            }, 
            {
                name: "Bitcoin Price Variation Prediction",
                desc: "Utilized machine learning technique of Bayesian Regression in Python to predict the variation in the cryptocurrency useful for bitcoin trading",
                url: "https://github.com/rachitthirani/Bitcoin-Price-Prediction"
            }, 
            {   
                name: "Market Segmentation",
                desc:"Developed an application to predict the communities using Facebook’s data using Python, useful in detecting the group of people with similar taste, helpful in recommendation of friends, network analysis and visualization based on the algorithm Structure-Attribute Clustering.",
                url: "https://github.com/rachitthirani/Market-Segmentation-using-Attributed-Graph-Community-Detection"
            },
            {   
                name: "Yelp Data Analysis",
                desc: "Built an application to predict the popularity of a restaurant at a particular day and time based on time series analysis on the checkin dataset provided by Yelp using Python and MongoDB. The application also predicts the performance of the particular business based ont he sentiments of reviews it recieves over a period of time. Fake reviews and ratings affect the final rating and poplarity of a business. Application also tries to detect fake users and users which kept under the scanner because their behaviour is a bit weird based on their social network, their review history and smillarity of the reviews. ",
                url: "https://github.com/rachitthirani/Time-Series-Analysis-and-Anomaly-Detection"
            },
            {
                name: "Overlapping Community Detection",
                desc: "Implemented the algorithm from the paper Efficient Identification of Overlapping Communities to detect overlapping communities in social networks. the algorithm uses the communication graph to find the structure of the communities. This knowledge about the structure is helpful in descovering groups of actors that hide their commmunications, possibly for malicious reasons. the algorithm used produces clusters of a comparable or better quality. The dataset used was Amazon's  community graph.",
                url: "https://github.com/rachitthirani/CommunityDetection-Project2GDM"
            },
            {
                name: "Virus Propogation",
                desc : "Implemented and algorithm to determine wheather a virus will result in an epidemic or it will die quickly. for a given network of individuals, where the edges represent who can potentially infect whom, the rate of porpogation of a virus across the network depends on the connectivity of the network and on the propogation model of the virus. The result have important inplication for the design and evaluation of immunization policies and can be applied to many problems, such as minimiing the spread od malware in computer networks or maximizing the spread od a makrketing campaign across a social network.",
                url : "https://github.com/rachitthirani/VirusPropagation"
            },
            {
                name: "Anomaly Detection in Time Evolving Networks",
                desc : "Anomaly detection refers to the problem of finding patterns in data which fail to conform to the expected standard. These anomalous patterns is useful to a number of business applications, such as identifying trending topics on social media and suspicious traffic on computer networks, as well as detecting credit card fraud, insurance fraud, and eauction fraud. Implemented the algorithm from the paper: NetSimile: A Scalable Approach to Size-Independent Network Similarity", 
                url : "https://github.com/rachitthirani/Anomaly-Detection-in-Time-Evolving-Networks"
            }
            ]
    },
    {   cate_name:"Operating Systems",
        index:2,
        pro:[{
                name: "Non Persistent Heap",
                desc: "Developed an in-memory kernel module, that provides efficient data sharing among different processes, in C which maps kernel space memory into user space memory using the user-space library interface and signs the requested size memory , specified by the offset, in kernel using the offset. Lock and unlock functions were implemented using the user space library to guarantee only one process can access an object at the same time leveraging the shared  memory policy.",
                url: "https://github.com/rachitthirani/NPheap"
            }, 
            {
                name: "Transactional Non Persistent Heap" ,
                desc: "Designed a kernel module in C which utilizes the concept of concurrency without locking. Version number is maintained for the object and a transaction is allowed to commit only if the version number is the same, i.e. no other transactions has changed the value. If the transaction cannot commit, it is aborted and restarted.",
                url: "https://github.com/rachitthirani/TNPHeap"
            }, 
            {   
                name: "Non Persistent Heap File System",
                desc:"Implemented a File System in C using the Fuse library and previously developed NPHeap kernel module. The file system is compatible with conventional file system operations. Data structures and operations that maintain the abstraction of a file system were implemented, with persistent data storage capabilities. ",
                url: "https://github.com/rachitthirani/CSC-501-NPHFS"
            }]
    },
    {   cate_name:"Database",
        index:3,
        pro:[{
                name: "Course Registration System",
                desc: "Developed an application for managing course registration, financial details, administrator functionalities while utilizing the concepts of relational databases using Java and Oracle with extensive use of procedures and triggers.",
                tech : "Java, SQL"
            }, 
            {
                name: "Paperless Hospital Management System" ,
                desc: "Developed an application for managinng the functionalities of Hospital without the use of paper. The application give the ability to patient, doctors, the pharmacy and diagnostic center to access data. Users could access their medical records whenever they want. Doctors coudl easily look up at the patient's previous records to provide the perfect treatement. Doctors can even access the patients medical records, prescriptions and all the scan details can be added by the diadnostuc center to the patient's account directly, reducing the need of carrying th reports and prescriptions. ",
                tech : "Java, SQL"
            }, 
            {   
                name: "Library Management System",
                desc:"Developed an application to manage the functionalities of library such as book lending,book availability, reminders for due dates, finincials. Library Staff and users can login and utilize the system to efficiently manage the functionalities of the library",
                tech :"C#, SQL"
            }]
    },
    {
        cate_name:"Web Services",
        index:4,
        pro:[{
            name:"Processing of Streaming Data using AWS infrastructure Services",
            desc:"Built a pipeline to process massive volumes of streaming data obtained using the Twitter API using AWS Kinesis for handling the streamed data, AWS Dynamodb for storing the unstructured data in a NoSQL Database, AWS Elastic Map Reduce to process the large volumes of streamed data efficiently. Implemented Pig, Hive and Spark programs to perform data analysis on an Elastic Map Reduce cluster and compared their performance.",
            url:"https://github.com/rachitthirani/Streaming-Application-For-Twitter-API-and-Map-Reduce-using-AWS",
        }]
    }

    ];
    $scope.image="images/me.jpg";
    $scope.tab=0;
}]);


tab.controller('skillsCtrl', ['$scope', function ($scope,$http)
{
        $scope.skills = [
        {
            skill_name:"Computer Languages",
        index:1,
        skill:[{
                name: "C"
            }, 
            {
                name: "C++"
            }, 
            {   
                name: "Python"
            },
            {   
                name: "Java"
            },
            {   
                name: "C#"
            },
            {
                name: "Perl"
            }
            ]
    },
    {   skill_name:"Data Science",
        index:2,
        skill:[{
                name: "R"
            }, 
            {
                name: "SQL"
            }, 
            {   
                name: "Apache Kafka"
            },
            {   
                name: "Doc2Vec"
            },
            {   
                name: "NetworkX"
            },
            {
                name: "Numpy"
            },
            {
                name:"Scipy"
            },
            {
                name:"Pandas"
            },
            {
                name:"Mathplotlib"
            },
            {
                name:"NLTK"
            },
            {
                name:"Scikit-Learn"
            }
            ]
    },
    {   skill_name:"Web Developement",
        index:3,
        skill:[{
                name: "HTML"
            }, 
            {
                name: "CSS"
            }, 
            {   
                name: "JavaScript"
            },
            {   
                name: "Jquery"
            },
            {   
                name: "BootStrap"
            },
            {
                name: "LESS"
            },
            {
                name:"AJAX"
            },
            {
                name:"NodeJS"
            },
            {
                name:"AngularJS"
            },
            {
                name:"ReactJS"
            },
            {
                name:"HandleBars"
            }
            ]
    },
    {
        skill_name:"Web Services",
        index:4,
        skill:[{
                name: "AWS"
            }, 
            {
                name: "DynamoDB"
            }, 
            {   
                name: "Map Reduce"
            },
            {   
                name: "Distributed Systems"
            },
            {   
                name: "Kinesis"
            },
            {
                name: "Pig"
            },
            {
                name:"HIVE"
            },
            {
                name:"Hadoop"
            },
            {
                name:"Amazon EC2"
            }
            ]
    }

    ];
    $scope.image="../images/me.jpg";
    $scope.tab=1;
}]);
