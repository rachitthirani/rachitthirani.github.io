
var tab =angular.module('TabsApp', []);
tab.controller('TabsCtrl', ['$scope', function ($scope,$http) {
    $scope.tabs = [
    	{
            name: "About Me",
            index:1,
            url: "aboutme.html"
        }, 
        {
            name: "Experience",
            index:2,
            url: "experience.html"
        },
        {   
            name:"Skills",
            index:3,
            url :"skills.html"
        }, 
        {	
			name:"Projects",
			index:3,
			url :"projects.html"
		},

		{	
			name:"Contact Me",
			index:4,
			url :"contactme.html"
		}
    ];


    $scope.currentTab = 'home.html';

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
            	desc: "Developed a tool in R for cleaning of IMDb’s data and prediction of rating for upcoming movies based on the attributes like actor’s rating, director’s rating, genre using machine learning techniques such as decision tree, k means clustering and neural networks.",
            	url: "abc.html"
        	}, 
        	{
            	name: "Bitcoin Price Variation Prediction",
            	desc: "Utilized machine learning technique of Bayesian Regression in Python to predict the variation in the cryptocurrency useful for bitcoin trading, using an application to predict the variation in the bitcoin price, useful for bitcoin trading strategies.",
            	url: "abc.html"
        	}, 
        	{	
				name: "Market Segmentation",
				desc:"Developed an application to predict the communities using Facebook’s data using Python, useful in detecting the group of people with similar taste, helpful in recommendation of friends, network analysis and visualization based on the algorithm Structure-Attribute Clustering.",
            	url: "abc.html"
			},
			{	
				name: "Anomaly Detection",
				desc:"Developed an application to find out the anomalies in time evolving graph using data from different domains using NetworkX and Python based on the NetSimile algorithm.",
            	url: "abc.html"
			},
			{	
				name: "Time Series analysis",
				desc: "Built an application to predict the popularity of a restaurant at a particular day and time based on time series analysis on the checkin dataset provided by Yelp using Python and MongoDB.",
            	url: "abc.html"
			}]
	},
	{	cate_name:"Operating Systems",
		index:2,
    	pro:[{
            	name: "Non Persistent Heap",
            	desc: "Developed an in-memory kernel module, that provides efficient data sharing among different processes, in C which maps kernel space memory into user space memory using the user-space library interface and signs the requested size memory , specified by the offset, in kernel using the offset. Lock and unlock functions were implemented using the user space library to guarantee only one process can access an object at the same time leveraging the shared  memory policy.",
            	url: "abc.html"
        	}, 
        	{
            	name: "Transactional Non Persistent Heap" ,
            	desc: "Designed a kernel module in C which utilizes the concept of concurrency without locking. Version number is maintained for the object and a transaction is allowed to commit only if the version number is the same, i.e. no other transactions has changed the value. If the transaction cannot commit, it is aborted and restarted.",
            	url: "abc.html"
        	}, 
        	{	
				name: "Non Persistent Heap File System",
				desc:"Implemented a File System in C using the Fuse library and previously developed NPHeap kernel module. The file system is compatible with conventional file system operations. Data structures and operations that maintain the abstraction of a file system were implemented, with persistent data storage capabilities.",
            	url: "abc.html"
			}]
	},
	{	cate_name:"Database",
		index:3,
    	pro:[{
            	name: "Course Registration System",
            	desc: "Developed an application for managing course registration, financial details, administrator functionalities while utilizing the concepts of relational databases using Java and Oracle with extensive use of procedures and triggers.",
            	url: "abc.html"
        	}, 
        	{
            	name: "Hospital Management System" ,
            	desc: "Designed a kernel module in C which utilizes the concept of concurrency without locking. Version number is maintained for the object and a transaction is allowed to commit only if the version number is the same, i.e. no other transactions has changed the value. If the transaction cannot commit, it is aborted and restarted.",
            	url: "abc.html"
        	}, 
        	{	
				name: "Library Management System",
				desc:"Implemented a File System in C using the Fuse library and previously developed NPHeap kernel module. The file system is compatible with conventional file system operations. Data structures and operations that maintain the abstraction of a file system were implemented, with persistent data storage capabilities.",
            	url: "abc.html"
			}]
	},
	{
		cate_name:"Web Services",
		index:4,
		pro:[{
			name:"Processing of Streaming Data using AWS infrastructure Services",
			desc:"Built a pipeline to process massive volumes of streaming data obtained using the Twitter API using AWS Kinesis for handling the streamed data, AWS Dynamodb for storing the unstructured data in a NoSQL Database, AWS Elastic Map Reduce to process the large volumes of streamed data efficiently. Implemented Pig, Hive and Spark programs to perform data analysis on an Elastic Map Reduce cluster and compared their performance.",
			url:"abc.html",
		}]
	}

    ];
    $scope.image="../images/me.jpg";
    $scope.tab=1;
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
