(ns example
  (:require
    [clojure.string :as string]))

(defn collect-attributes
  "Collects the attribute keys into a map"
  [data]
  (when (map? data)
    (into {} (for [[k v] data]
               (when-let [attr (second (attr k))]
                 (vector (keyword attr) v))))))
